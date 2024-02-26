const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const login = (req, res) => {
    const [{ username, password }] = req.body;
    pool.query(queries.login, [username, password], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const [{ username, password, email, dor }] = req.body;
    let rows = 0;
    pool.query(queries.checkUsernameExists, [username], (error, results) => {
        if (results.rows.length > rows) {
            res.send("Username already exists.");
            rows = results.rows.length;
        }
        pool.query(queries.checkEmailExists, [email], (error, results) => {
            if (results.rows.length > rows) res.send("Email already exists.");
            if (results.rows.length === 0) {
                pool.query(queries.addUser, [username, password, email, dor], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("User Created Successfully!");
                });
            }
        });
    });
};

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        const userFound = results.rows.length;
        if (userFound) {
            pool.query(queries.removeUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User removed successfully.");
            });
        }
        else res.send("User doesn't exist in database.");
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const [{ username, password, email, dor }] = req.body;
    pool.query(queries.getUserById, [id], (error, results) => {
        const userFound = results.rows.length;
        if (userFound) {
            pool.query(queries.updateUser, [id, username, password, email, dor], (error, results) => {
                if (error) throw error;
                res.status(200).send("User updated successfully");
            });
        }
        else res.send("User doesn't exist in database.");
    });
};

module.exports = {
    getUsers,
    getUserById,
    login,
    addUser,
    removeUser,
    updateUser
}