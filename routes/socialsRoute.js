import express from "express";
import { getSocials } from "../controllers/socialsController.js";

const router = express.Router();

router.route("/").get(getSocials);

export default router;
