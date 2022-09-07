const secret = require('../../common/config/env.config.js').jwt_secret
const jwt = require('jsonwebtoken');
const UsersModel = require('../../users/models/users.model')

//TODO split login into jwt and put the rest in middleware
exports.login = async (req, res) => {
    const body = req.body;
    //NOT IMPLEMENTED
    const user = UsersModel.getByEmail(body.email);
    if (user) {
        const refresh = req.body.email + secret;
        let salt;
        await bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err });
            } else {
                salt = salt;
            }
        });
        let hash;
        await bcrypt.hash(refresh, salt, function(err, hash) {
            if (err) {
                console.log(err);
                res.status(500).json({ error: err });
            } else {
                hash = hash;
            }
        });
        req.body.refreshKey = salt;
        const token = jwt.sign(req.body, jwtSecret);
        let refresh_token = hash;
        res.status(201).send({accessToken: token, refreshToken: refresh_token});
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
};

exports.refresh_token = (req, res) => {
    try {
        req.body = req.jwt;
        let token = jwt.sign(req.body, jwtSecret);
        res.status(201).send({id: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};