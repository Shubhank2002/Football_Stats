require("dotenv").config();

const express = require("express");
const ConnectDB = require("./Connections/connection");
const app = express();
app.use(express.json())
const cors = require("cors");
const MatchRouter = require("./Routes/MatchRouter");

ConnectDB();
app.use(cors());
const PORT = process.env.PORT || 8000;
app.use("/match", MatchRouter);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
