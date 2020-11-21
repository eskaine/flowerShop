const jwt = require('jsonwebtoken');

/**
 * @expiry set to expire in 24 hrs
 */

async function createToken(payload) {
    let token = await jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: 24 * 60 * 60 * 1000 });
    return token;
}

function checkToken(req, res, next) {
    const token = req.header("x-auth-token");
  
    if (!token) {
      return res.sendStatus(401);
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
    } catch (error) {
      return res.sendStatus(401);
    }
  }

module.exports = {
    createToken,
    checkToken
};