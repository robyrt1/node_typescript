import path from "path";
import express from "express";
import { routes } from "../app/routes/index";

const middlewares = [express.json()];

export class ExpressConfig {
  public app: express.Application;
  public middlewares = [express.json()];
  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.router();
    this.updload();
  }

  private setMiddlewares() {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private router() {
    routes.forEach((router) => {
      this.app.use(router);
    });
  }

  private updload() {
    this.app.use(
      "/upload",
      express.static(path.resolve(__dirname, "../..", "uploads"))
    );
  }
}
