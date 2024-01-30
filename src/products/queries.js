const getProducts = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const checkTitleExists = "SELECT p FROM products p WHERE p.title = $1";
const addProduct = "INSERT INTO products (title, description, cover, price, owner, dol, stock, likes) VALUES ($1, $2, $3, $4, $5, dol, $6, 0)";
const removeProduct = "DELETE FROM products WHERE id = $1";
const updateProduct = "UPDATE products SET title = $2, description = $3, cover = $4, price = $5 WHERE id = $1";
const sellProduct = "UPDATE products SET stock = stock-1 WHERE id = $1";
const addLike = "UPDATE products SET likes = likes+1 WHERE id = $1";
const removeLike = "UPDATE products SET likes = likes-1 WHERE id = $1";

module.exports = {
    getProducts,
    getProductById,
    checkTitleExists,
    addProduct,
    removeProduct,
    updateProduct,
    sellProduct,
    addLike,
    removeLike
}

// CREATE TABLE products(ID SERIAL PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), cover VARCHAR(255), price int, owner int, dol DATE, stock int, likes int);