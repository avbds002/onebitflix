import express from "express";
import { database } from "./database/index";
import { adminJs, adminJsRouter } from "./adminjs";

const app = express();

//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter);

//configuração para usar arquivos estáticos
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log("DB CONNECTION SUCCESSFULL");
  });
  console.log(`Server started successfully at localhost:${PORT}`);
});
