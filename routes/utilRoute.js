const router = require("express").Router();

const utilController = require("../controllers/utilController");

router.post("/has-duplicates", utilController.hasDuplicates);


module.exports = router;

