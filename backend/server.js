import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./config/config.js";

const PORT = process.env.PORT || 9999;

const app = express();

//logger
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors({ origin: "http://localhost:5137" }));

app.use(express.json());

app.get("/api/v1/money", (req, res) => {});

app.get("/api/v1/workload", (req, res) => {});

app.post("api/v1/sell", (req, res) => {});

app.post("api/v1/humans", (req, res) => {});

app.listen(PORT, () => console.log("Server listening on port", PORT));
