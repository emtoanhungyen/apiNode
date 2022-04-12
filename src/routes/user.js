import { Router } from "express";
import { getUser, listUser, remove, signin, signup } from "../controllers/user";

const route = Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.get("/users/:id", getUser);
route.get("/users", listUser);
route.delete("/users/:id", remove);


export default route;