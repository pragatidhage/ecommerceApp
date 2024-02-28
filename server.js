import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

//config env
//here .env is in root no need to config path otherwise dotenv.config("PATH":"/path");
dotenv.config();

//databaseconfig
connectDB();

//rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//rest api
app.get('/', (req, res) => {
  res.send("<h1>Welcome to Ecommerce App</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
