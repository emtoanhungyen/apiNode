import { Router } from "express";
import { signin, signup } from "../controllers/user";

const route = Router();

route.post("/signup", signup);
route.post("/signin", signin);


export default route;