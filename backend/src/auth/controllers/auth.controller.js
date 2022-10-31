const secret = require('../../common/config/env.config.js').jwt_secret
const refresh_secret = require('../../common/config/env.config.js').jwt_refresh_secret
const expiration = require('../../common/config/env.config.js').jwt_expiration
const refresh_expiration = require('../../common/config/env.config.js').jwt_refresh_expiration
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        const access_token = jwt.sign({email:req.body.email},secret,{ expiresIn: expiration});
        const refresh_token = jwt.sign({email:req.body.email},refresh_secret,{ expiresIn: refresh_expiration});
        console.log(access_token);
        console.log(refresh_token);
        res.cookie('jwt',refresh_token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true, secure: true });
        res.status(201).send({access_token: access_token});
    } catch (err) {
        console.log(err);
        res.status(500).send(err); 
    }
};

exports.refresh_token = (req, res) => {
    try {
        console.log(req.body);
        const access_token = jwt.sign(req.body, secret);
        res.status(201).send({access_token: access_token});
    } catch (err) {
        console.log(err);
        res.status(500).send({errors: err});
    }
};