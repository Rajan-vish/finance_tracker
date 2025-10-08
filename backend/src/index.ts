// import "dotenv/config";
// import "./config/passport.config";
// import express, { NextFunction, Request, Response } from "express";
// import cors from "cors";
// import passport from "passport";
// import { Env } from "./config/env.config";
// import { HTTPSTATUS } from "./config/http.config";
// import { errorHandler } from "./middlewares/errorHandler.middleware";
// import { BadRequestException } from "./utils/app-error";
// import { asyncHandler } from "./middlewares/asyncHandler.middlerware";
// import connctDatabase from "./config/database.config";
// import authRoutes from "./routes/auth.route";
// import { passportAuthenticateJwt } from "./config/passport.config";
// import userRoutes from "./routes/user.route";
// import transactionRoutes from "./routes/transaction.route";
// import { initializeCrons } from "./cron";
// import reportRoutes from "./routes/report.route";
// import { getDateRange } from "./utils/date";
// import analyticsRoutes from "./routes/analytics.route";

// const app = express();
// const BASE_PATH = Env.BASE_PATH;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());

// app.use(
//   cors({
//     origin: Env.FRONTEND_ORIGIN,
//     credentials: true,
//   })
// );

// app.get(
//   "/",
//   asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     throw new BadRequestException("This is a test error");
//     res.status(HTTPSTATUS.OK).json({
//       message: "Hello Subcribe to the channel",
//     });
//   })
// );

// app.use(`${BASE_PATH}/auth`, authRoutes);
// app.use(`${BASE_PATH}/user`, passportAuthenticateJwt, userRoutes);
// app.use(`${BASE_PATH}/transaction`, passportAuthenticateJwt, transactionRoutes);
// app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes);
// app.use(`${BASE_PATH}/analytics`, passportAuthenticateJwt, analyticsRoutes);

// app.use(errorHandler);

// app.listen(Env.PORT, async () => {
//   await connctDatabase();

//   if (Env.NODE_ENV === "development") {
//     await initializeCrons();
//   }

//   console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
// });
// 1) Load dotenv first (explicit)
// import dotenv from 'dotenv';
// dotenv.config({ path: '.env' });

// // 2) One-time sanity check (remove after success)
// console.log('ENV check:', {
//   CLOUDINARY_CLOUD_NAME: !!process.env.CLOUDINARY_CLOUD_NAME,
//   RESEND_API_KEY: !!process.env.RESEND_API_KEY,
// });

// // 3) Now import config that reads env
// import { Env } from './config/env.config';

// // 4) Rest of your imports
// import express, { NextFunction, Request, Response } from 'express';
// import cors from 'cors';
// import passport from 'passport';
// import './config/passport.config'; // if this reads Env, it is now safe
// import { HTTPSTATUS } from './config/http.config';
// import { errorHandler } from './middlewares/errorHandler.middleware';
// import { BadRequestException } from './utils/app-error';
// import { asyncHandler } from './middlewares/asyncHandler.middlerware';
// import connectDatabase from './config/database.config';
// import authRoutes from './routes/auth.route';
// import { passportAuthenticateJwt } from './config/passport.config';
// import userRoutes from './routes/user.route';
// import transactionRoutes from './routes/transaction.route';
// import { initializeCrons } from './cron';
// import reportRoutes from './routes/report.route';
// import { getDateRange } from './utils/date';
// import analyticsRoutes from './routes/analytics.route';

// // 5) App bootstrap
// const app = express();
// const BASE_PATH = Env.BASE_PATH;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());

// app.use(
//   cors({
//     origin: Env.FRONTEND_ORIGIN,
//     credentials: true,
//   })
// );

// app.get(
//   '/',
//   asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
//     throw new BadRequestException('This is a test error');
//     res.status(HTTPSTATUS.OK).json({
//       message: 'Hello Subcribe to the channel',
//     });
//   })
// );

// app.use(`${BASE_PATH}/auth`, authRoutes);
// app.use(`${BASE_PATH}/user`, passportAuthenticateJwt, userRoutes);
// app.use(`${BASE_PATH}/transaction`, passportAuthenticateJwt, transactionRoutes);
// app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes);
// app.use(`${BASE_PATH}/analytics`, passportAuthenticateJwt, analyticsRoutes);

// app.use(errorHandler);

// app.listen(Env.PORT, async () => {
//   await connectDatabase();

//   if (Env.NODE_ENV === 'development') {
//     await initializeCrons();
//   }

//   console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
// });
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

console.log("ENV check:", {
  CLOUDINARY_CLOUD_NAME: !!process.env.CLOUDINARY_CLOUD_NAME,
  RESEND_API_KEY: !!process.env.RESEND_API_KEY,
});

import { Env } from "./config/env.config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import passport from "passport";
import "./config/passport.config";
import { HTTPSTATUS } from "./config/http.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { BadRequestException } from "./utils/app-error";
import { asyncHandler } from "./middlewares/asyncHandler.middlerware";
import connectDatabase from "./config/database.config";
import authRoutes from "./routes/auth.route";
import { passportAuthenticateJwt } from "./config/passport.config";
import userRoutes from "./routes/user.route";
import transactionRoutes from "./routes/transaction.route";
import { initializeCrons } from "./cron";
import reportRoutes from "./routes/report.route";
import { getDateRange } from "./utils/date";
import analyticsRoutes from "./routes/analytics.route";

const app = express();
const BASE_PATH = Env.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use(
  cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true,
  })
);

// Root route: Test error hata diya
app.get(
  "/",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTPSTATUS.OK).json({
      message: "Hello  there , This Side Rajan.",
    });
  })
);

app.use(`${BASE_PATH}/auth`, authRoutes);
app.use(`${BASE_PATH}/user`, passportAuthenticateJwt, userRoutes);
app.use(`${BASE_PATH}/transaction`, passportAuthenticateJwt, transactionRoutes);
app.use(`${BASE_PATH}/report`, passportAuthenticateJwt, reportRoutes);
app.use(`${BASE_PATH}/analytics`, passportAuthenticateJwt, analyticsRoutes);

app.use(errorHandler);

app.listen(Env.PORT, async () => {
  await connectDatabase();

  if (Env.NODE_ENV === "development") {
    await initializeCrons();
  }

  console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
});
