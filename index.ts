import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("post!");
});

app.put("/user", (req, res) => {
  res.send("putting user");
});

app.delete("/user", (req, res) => {
  res.send("deleting user");
});

app.listen(port, () =>
  console.log(` Express is listening at http://localhost:${port}`)
);
