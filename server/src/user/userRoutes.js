const express = require('express');
const router = express.Router();
const User = require('../models/user');
const execute = require('../utility/dbHelper');
const utility = require('../utility/utility');
const responseObject = require('../models/responseModel');
const jwt = require('jsonwebtoken');
const auth = require("../authentication/auth")();

router.post('/login', (req, res) => {
    const user = new User();
    user.loginId = req.body.loginId;
    user.loginPassword = utility.encrypt(req.body.loginPassword, global.gEnvConfig.encryptionDecryptionKey);
    execute(user, "usp_User_SelectByLoginIdPassword", (err, data)=>{
        const responseDetail = new responseObject();
        if (err) {
            responseDetail.status = "fail";
            responseDetail.errorMessage = err.message;
            responseDetail.errorStack = err.stack;
        }
        else {
            responseDetail.status = "user authenticated successfully.";
            delete responseDetail.errorMessage;
            delete responseDetail.errorStack;
            responseDetail.data = jwt.sign(data[0], global.gEnvConfig.tokenKey, {expiresIn: global.gEnvConfig.tokenExpirationTime});
        }
        res.json(responseDetail);
});
});
router.post('/', (req, res)=>{
    const user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.role.id = req.body.role.id;
    user.userType.id = req.body.userType.id;
    user.gender = req.body.gender;
    user.loginId = req.body.loginId;
    user.loginPassword = utility.encrypt( req.body.loginPassword.toString(), global.gEnvConfig.encryptionDecryptionKey);
    execute(user, "usp_User_Insert", (err, data) => {
        const responseDetail = new responseObject();
        if (err) {
            responseDetail.status = "fail";
            responseDetail.errorMessage = err.message;
            responseDetail.errorStack = err.stack;
        }
        else {
            responseDetail.status = "success";
            responseDetail.data = data;
        }
        res.json(responseDetail);

    });

})
.put('/', auth.authenticate() ,(req, res)=>{
    res.json('user put request');
})
.delete('/', auth.authenticate() ,(req, res)=>{
    res.json('user delete request');
})

module.exports = router;