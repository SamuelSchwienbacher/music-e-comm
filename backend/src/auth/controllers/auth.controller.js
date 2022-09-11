const secret = require('../../common/config/env.config.js').jwt_secret
const refresh_secret = require('../../common/config/env.config.js').jwt_refresh_secret
const expiration = require('../../common/config/env.config.js').jwt_expiration
const refresh_expiration = require('../../common/config/env.config.js').jwt_refresh_expiration
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        let token = jwt.sign({email:user.email},secret,{ expiresIn: expiration});
        let refresh_token = jwt.sign({email:user.email},refresh_secret,{ expiresIn: refresh_expiration});
        res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });
        res.status(201).send({accessToken: token, refreshToken: refresh_token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};

exports.refresh_token = (req, res) => {
    try {
        req.body = req.jwt;
        let token = jwt.sign(req.body, secret);
        res.status(201).send({accessToken: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};