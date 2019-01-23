import * as Koa from "koa";
import * as Router from "koa-router";
import * as Logger from "koa-logger";
import * as Static from "koa-static";
import * as BodyParser from "koa-bodyparser";
import * as path from "path";
import Onerror from "@koex/onerror";

const isProd = process.env.NODE_ENV === "production";
const resolve = (file: string) => path.resolve(__dirname, file);

const app = new Koa();
const router = new Router();

app.use(Onerror());
app.use(Logger());
app.use(BodyParser());

if (!isProd) {
  app.use(Static(resolve("../uploads")));
}

router.get("/api/getTest", async ctx => {
  ctx.body = "Hello World!";
});

app.use(router.routes());

app.listen(3000);

console.log("Server running on port 3000");
