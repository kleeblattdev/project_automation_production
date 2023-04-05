import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./config/config.js";
import { readFile, updateKontostand, updateWorkload } from "./helper.js";

const PORT = process.env.PORT || 9999;

const app = express();

//logger
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(cors());

app.use(express.json());

app.get("/api/v1/money", (req, res) => {
	readFile()
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

app.get("/api/v1/workload", (req, res) => {
	readFile()
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

app.post("/api/v1/sell", (req, res) => {
	updateKontostand();
	res.end();
});

app.post("/api/v1/humans/:resource", (req, res) => {
	const resource = req.params.resource;
	updateWorkload(resource);
	res.end();
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
