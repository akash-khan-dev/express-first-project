const express = require("express");

const app = express();

const simpleLogger = (req, res, next) => {
  console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
  const name = req.query.name;
  if (name === "akash") {
    res.json({
      massege: "bad request",
    });
  } else {
    next();
  }
};
app.use(simpleLogger);
app.get("/hello", (req, res, next) => {
  res.json({
    message: "hello",
  });
});
app.get("/", (req, res, next) => {
  res.json({
    message: "sweet home",
  });
});

app.listen(8000, () => {
  console.log("i am listening to on running 8000");
});
