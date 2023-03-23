import csv from "csv-parser";
import express from "express";
import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = parseInt(process.env.PORT || "3000", 10);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results = [];

createReadStream(join(__dirname, "newsSource.csv"))
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log("File loaded successfully");
  })
  .on("error", console.error);

app.get("/news", (req, res) => {
  res.send(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
