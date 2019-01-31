const Koa = require("koa");
const path = require("path");
const Logger = require("koa-logger");
const Static = require("koa-static");
const Onerror = require("koa-onerror");
const proConfig = require("../config");
const BodyParser = require("koa-bodyparser");
const routes = require("./routes");

const app = new Koa();
const isProd = process.env.NODE_ENV === "production";
const resolve = file => path.resolve(__dirname, file);
const { POST, HOST } = proConfig.app;

require("./db");

Onerror(app);
app.use(Logger());
app.use(BodyParser());
routes(app);

if (!isProd) {
  app.use(Static(resolve("../uploads")));
}

app.listen(POST, HOST, () => {
  console.log(`server is listening on http://${HOST}:${POST}`);
});
