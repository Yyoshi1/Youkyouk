import { Router } from "express";
import listDomains from "./list-domains";
import createDomain from "./create-domain";
import updateDomain from "./update-domain";
import deleteDomain from "./delete-domain";

const route = Router();

export default (app) => {
  app.use("/domains", route);

  route.get("/", listDomains);
  route.post("/", createDomain);
  route.put("/:id", updateDomain);
  route.delete("/:id", deleteDomain);

  return app;
};
