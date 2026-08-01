const env = {
  NODE_ENV: process.env.NODE_ENV || "development",

  PORT: Number(process.env.PORT) || 5000,

  API_VERSION: process.env.API_VERSION || "v1",

  DATABASE_URL: process.env.DATABASE_URL || "",

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "",

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",

  ACCESS_TOKEN_EXPIRES: process.env.ACCESS_TOKEN_EXPIRES || "15m",

  REFRESH_TOKEN_EXPIRES: process.env.REFRESH_TOKEN_EXPIRES || "7d",

  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",

  BCRYPT_SALT_ROUNDS: Number(process.env.BCRYPT_SALT_ROUNDS) || 12,
};

export default env;
