const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = 4242;

const corsOptions = {
  origin: "http://localhost:5173", // Allow only the frontend origin (TODO)
  credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("API for BIOT Team 001 is running... :)");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
