import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  return res.status(200).send({
    message: "Teste 200",
  });
});

app.listen(5000, () => {
  console.log("Online na porta 5000");
});
