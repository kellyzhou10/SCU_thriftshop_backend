const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkUsernameExists = "SELECT u FROM users u WHERE u.username = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser = "INSERT INTO users (username, password, email, dor) VALUES ($1, $2, $3, $4)";
const removeUser = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET username = $2, password = $3, email = $4, dor = $5 WHERE id = $1";

module.exports = {
    getUsers,
    getUserById,
    checkUsernameExists,
    checkEmailExists,
    addUser,
    removeUser,
    updateUser
}

// CREATE TABLE users(ID SERIAL PRIMARY KEY, username VARCHAR(255), password VARCHAR(255), email VARCHAR(255), dor DATE);