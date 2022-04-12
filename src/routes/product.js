import { Router } from "express";
import {
    create, get, list, remove, update,
} from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, requiredSigin } from "../middlewares/checkAuth";

const router = Router();

router.get("/products", list);
router.post("/products/:useId", requiredSigin, create);
router.get("/products/:id", checkAuth, get);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);

router.param('userId', userById);
export default router;