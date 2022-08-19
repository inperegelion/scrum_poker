const express = require("express");
var cors = require("cors");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/room", require("./routes/roomRouter"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
