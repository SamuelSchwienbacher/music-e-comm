const   jwt =  require('jsonwebtoken'),
        secret = require('../config/env.config.js').jwt_secret,
        refresh_secret = require('../config/env.config.js').jwt_refresh_secret;

exports.verifyRefreshBodyField = (req, res, next) => {
    if (req.body && req.body.refresh_token) {
        return next();
    } else {
        return res.status(400).send({error: 'need to pass refresh_token field'});
    }
};

exports.validAccess = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.body = jwt.verify(authorization[1], secret);
                return next();
            }
        } catch (err) {
            return res.status(401).send({error: 'Invalid access token'});
        }
    } else {
        return res.status(401).send();
    }
}

exports.validRefresh = (req, res, next) => {
    try {
        req.body = jwt.verify(req.body.refresh_token, refresh_secret);
        return next();
    } catch {
        return res.status(401).send({error: 'Invalid refresh token'});
    }
};