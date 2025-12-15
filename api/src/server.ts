import "dotenv/config";
import express from "express";
import config from "./mikro-orm.config.js";
import { MikroORM } from "@mikro-orm/postgresql";
import * as http from "node:http";

const orm = await MikroORM.init(config);
export const em = orm.em;

const app = express();

http.createServer(app).listen(80);
