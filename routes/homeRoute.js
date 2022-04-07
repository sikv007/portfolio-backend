import express from "express";
import { getCSS, getHTML, getJS } from "../controllers/homeController.js";

const router = express.Router();

router.route("/").get(getHTML);
router.route("/src/css/style.css").get(getCSS);
router.route("/src/js/index.js").get(getJS);

export default router;
