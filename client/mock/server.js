const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config");
const initMockRouter = require('./router');

const app = express();
app.use(bodyParser.json());
// 此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router();
initMockRouter(router);
app.use(router);

const port = config.port;
app.listen(port, () => {
  console.log(`mock server started at ${port}`);
});
