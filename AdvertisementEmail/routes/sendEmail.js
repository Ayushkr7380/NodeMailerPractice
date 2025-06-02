import { Router } from "express";
import { sendEmailToUser } from "../controllers/email.send.js";

const router = Router();


router.post("/sendEmail",sendEmailToUser);

export default router;