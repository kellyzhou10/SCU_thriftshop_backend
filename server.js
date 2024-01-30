const express = require("express");
const userRoutes = require("./src/users/routes");
const productRoutes = require("./src/products/routes");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
