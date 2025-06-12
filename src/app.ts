import express from "express";
import path from "path";
import userRoutes from "./routes/user";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`[🎉API] Server is running on http://localhost:${PORT}`);
});
