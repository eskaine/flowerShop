const { body } = require("express-validator");

function checkEmail() {
    return body('email').isEmail();
}

function checkCount() {
    return body('count').isInt({ min: 1, max: 20 });
}

function checkObjectID(str) {
    return body(str).isMongoId();
}

function checkName(str) {
    return body(str).isAlpha();
}

function verifyRegister() {
    return [
        checkEmail(),
        body('username').isAlphanumeric().isLength({ min: 5 }),
        body('password').isLength({ min: 6 })
    ];
}

function verifyCart() {
    return [
        checkCount(),
        body('ribbon').isLength({ max: 12 }),
        body('wrap').isLength({ max: 12 })
    ];
}

function verifyIDs() {
    return [
        checkObjectID('userid'),
        checkObjectID('cartid'),
    ];
}

function verifyProductName() {
    return [
        body('productName').matches(/([a-zA-Z])+\s?/g)
    ];
}

function verifyProfile() {
    return [
        checkEmail().optional(),
        checkName('firstname').optional(),
        checkName('lastname').optional(),
        body('address').matches(/(\w\s\w)+/g).optional(),
        body('phone').isMobilePhone('en-SG').optional()
    ];
}

module.exports = {
    checkEmail,
    checkCount,
    checkObjectID,
    verifyRegister,
    verifyCart,
    verifyIDs,
    verifyProductName,
    verifyProfile
}