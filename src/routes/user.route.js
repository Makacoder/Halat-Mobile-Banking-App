
const express = require("express") 
const User = require('../controllers/user.controller');
const router = express.Router();

//Question 1 - path = localhost:2046/api/v1/new-user
router.post("/new-user", User.addUser);

//Question 2 - path = localhost:2046/api/v2/countNum-user
router.get("/countNum-user", User.countUserNum);

//Question 3 - path = localhost:2046/api/v3/fetch-user
router.get("/fetch-user", User.fetchUser);

//Question 4 - path = localhost:2046/api/v4/update-user/id num
router.patch("/update-user/:_id", User.updateUser);

module.exports = router;