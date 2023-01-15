const router = require("express").Router();

const userController = require("../controllers/emiController");

router.get("/get-emi", userController.getEmi);


module.exports = router;

