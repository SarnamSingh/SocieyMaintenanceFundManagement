const express = require('express');
const router = express.Router();
const User = require('../models/user');
const execute = require('../utility/dbHelper');
const utility = require('../utility/utility');
const responseObject = require('../models/responseModel');

router.get('/authenticate', (req, res) => {
    const user = new User();
    user.loginId = req.body.loginId;
    user.loginPassword = utility.encrypt(req.body.loginPassword, global.gCurrentEnvironmentConfiguration.encryptionDecryptionKey);
    execute(user, "usp_user_FindByLoginIdPassword", (err, data)=>{
     if(err){

     }
     else{
         
     }
    });
    res.json('user get request');
})
.post('/', (req, res)=>{
    const user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.role.id = req.body.role.id;
    user.userType.id = req.body.userType.id;
    user.gender = req.body.gender;
    user.loginId = req.body.loginId;
    user.loginPassword = utility.encrypt( req.body.loginPassword.toString(), global.gCurrentEnvironmentConfiguration.encryptionDecryptionKey);
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
.put('/',(req, res)=>{
    res.json('user put request');
})
.delete('/', (req, res)=>{
    res.json('user delete request');
})

module.exports = router;