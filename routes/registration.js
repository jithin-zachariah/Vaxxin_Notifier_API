var express = require("express");
var router = express.Router();
const regController = require("../controller/regController");

/* GET home page. */
router.route('/register').post(regController.registerUser)

module.exports = router;
