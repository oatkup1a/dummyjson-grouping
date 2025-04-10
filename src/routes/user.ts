import express from "express";
import { getTransformedUserData } from "../controllers/user";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const result = await getTransformedUserData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to process data" });
  }
});

export default router;
