const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getUsers);
router.post("/", controller.addUser);
router.get("/login", controller.login);
router.get("/:id", controller.getUserById);
router.delete("/:id", controller.removeUser);
router.put("/:id", controller.updateUser);

module.exports = router;