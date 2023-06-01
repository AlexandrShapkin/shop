import config from "config";
import express from "express";
import mongoose from "mongoose";
import router from "./api/Router.js";
import fileUpload from "express-fileupload";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = config.get("app.port");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/build"));
app.use(fileUpload({}));
app.use("/api", router);
app.get("/image/:imageName", (req, res) => {
  const {imageName} = req.params;

  res.sendFile(path.join(__dirname, "static", imageName));
});
app.get('/*', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function getDbConnectionUrl() {
  try {
    const host = config.get("dbServer.host");
    const port = config.get("dbServer.port");
    const dbName = config.get("dbServer.name");

    return `mongodb://${host}:${port}/${dbName}`;
  } catch (err) {
    throw new Error("Config error:\n" + err.message);
  }
}

(async () => {
  try {
    const dbUrl = getDbConnectionUrl();
    await mongoose.connect(dbUrl);

    app.listen(PORT, () =>
      console.log("Server start http://localhost:" + PORT)
    );
  } catch (err) {
    console.log(err);
  }
})();
