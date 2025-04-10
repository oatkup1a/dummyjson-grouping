import express from "express";
import userRoutes from "./routes/user";

const app = express();
const PORT = 3000;

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`[🎉API] Server is running on http://localhost:${PORT}`);
});
