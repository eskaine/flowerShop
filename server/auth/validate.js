const { body, oneOf, validationResult } = require("express-validator");

function checkEmail() {
    return body('email').isEmail();
}

function verifyEmail() {
    return [checkEmail()];
}

function verifyRegister() {
    return [
        body('username').isLength({ min: 5 }),
        checkEmail(),
        body('password').isLength({ min: 6 })
    ];
}

module.exports = {
    verifyEmail,
    verifyRegister
}