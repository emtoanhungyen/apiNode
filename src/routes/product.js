import { Router } from "express";
import { route } from "express/lib/application";
import {
    create, get, list, remove, search, update,
} from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth,  requiredSigin } from "../middlewares/checkAuth";

const router = Router();

router.get("/products", list);
router.post("/products/:useId", requiredSigin, create);
router.get("/products/:id", checkAuth, get);
router.delete("/products/:id", checkAuth, remove);
router.put("/products/:id", checkAuth, update);

router.post("/search", search);

router.param('userId', userById);
export default router;