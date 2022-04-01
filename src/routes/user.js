import { Router } from "express";
import { getUser, signin, signup } from "../controllers/user";

const route = Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.get("/users/:id", getUser);


export default route;