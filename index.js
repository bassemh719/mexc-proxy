import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/mexc", async (req, res) => {
  try {
    const endpoint = req.query.endpoint;
    if (!endpoint) {
      return res.json({ error: "endpoint required" });
    }

    const url = "https://api.mexc.com" + endpoint;
    const r = await fetch(url);
    const data = await r.json();

    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Proxy running");
});
