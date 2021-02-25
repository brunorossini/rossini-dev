import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

import cors from './middlewares/cors';
import routes from "./routes";

admin.initializeApp(functions.config().firebase);

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

export const webApi = functions.https.onRequest(app);
