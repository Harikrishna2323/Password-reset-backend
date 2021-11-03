process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require("express");

const app = express();

const errorMiddleware = require("./middlewares/errors");

const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Import all routes

const authRouter = require("./routes/auth");

app.use("/api/v1", authRouter);

// if(process.env.NODE_ENV === 'PRODUCTION'){
//     app.use(express.static())
// }

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
