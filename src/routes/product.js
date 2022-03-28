import { Router } from "express";
import {
    create, get, list, remove, update,
} from "../controllers/product";

const router = Router();

router.get("/products", list);
router.post("/products", create);
router.get("/products/:id", get);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;