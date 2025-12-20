import "dotenv/config";
import express from "express";
import config from "./mikro-orm.config.js";
import { MikroORM } from "@mikro-orm/postgresql";
import * as http from "node:http";
import { paths } from "./config/paths.js";
import { articlesRouter } from "./routes/articles.js";

const orm = await MikroORM.init(config);
export const em = orm.em;

const app = express();
const router = express.Router();
app.use(paths.root.path, router);

router.use(paths.root.articles.path, articlesRouter);

http.createServer(app).listen(80);
