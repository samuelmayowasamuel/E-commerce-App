import express, { json, urlencoded } from "express";
import productRoutes from "./routes/products/index.js";

const app = express();
const PORT = 3000;
app.use(json());
app.use(urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Products APII");
});

app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Port is lisitng on http://localhost:${PORT}`);
});
