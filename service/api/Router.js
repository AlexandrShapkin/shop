import { Router } from "express";
import ShopController from "./ShopController.js";

const router =  new Router();

router.post("/shop", ShopController.create);
router.get("/shop", ShopController.getAll);
router.get("/shop/:id", ShopController.getOne);
router.put("/shop", ShopController.update);
router.delete("/shop/:id", ShopController.delete);

export default router;