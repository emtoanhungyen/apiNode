import { Router } from "express";
import {
    create, get, list, remove, update,
} from "../controllers/cart";

const router = Router();

router.get("/cart", list);
router.post("/cart", create);
router.get("/cart/:id", get);
router.delete("/cart/:id", remove);
router.put("/cart/:id", update);

export default router;