import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import env from "./config/env";

const app = express();

/**
 * Security
 */
app.use(helmet());

/**
 * CORS
 */
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  }),
);

/**
 * Compression
 */
app.use(compression());

/**
 * Body Parser
 */
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

/**
 * Cookies
 */
app.use(cookieParser());

/**
 * HTTP Logger
 */
app.use(morgan("dev"));

export default app;
