const jwt = require('jsonwebtoken');

async function token_verification(req, res, next){
    try {
        if(req.body.token === undefined){
            const decoded = await jwt.verify(req.headers['token'], process.env.ACCESS_TOKEN_SECRET);
            console.log("Decoded: ", decoded)
            req.user = decoded;
        }
        else{
            const decoded = await jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded;
        }
        next();
    } catch (err) {
        console.error('JWT Verification Error:', err.message);
        res.status(401).json({ error: 'Unauthorized' });
    }
}

module.exports = token_verification;
