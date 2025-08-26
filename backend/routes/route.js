import express from "express";
import handlemessage from "../controllers/messageControllers";
const router = express.Router();

router.post("/chat",handlemessage);

export default router;
