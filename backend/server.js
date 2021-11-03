const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception!");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
if (process.env.NODE_ENV !== "PRODUCTION")
  require(dotenv).config({ path: "/config.env" });

//connecting to database

connectDatabase();

const server = app.listen(process.env.PORT, () =>
  console.log(
    `Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
);

//Handling unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down th server!!!");
  server.close(() => {
    process.exit(1);
  });
});
