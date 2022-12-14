const UserModel = require('../../users/models/users.model');
const bcrypt = require('bcrypt');

exports.hasAuthValidFields = (req, res, next) => {
    let errors = [];

    if (req.body) {
        if (!req.body.email) {
            errors.push('Missing email field');
        }
        if (!req.body.password) {
            errors.push('Missing password field');
        }

        if (errors.length) {
            console.log(req.body)
            return res.status(400).send({errors: errors.join(',')});
        } else {
            return next();
        }
    } else {
        console.log('missing body')
        return res.status(400).send({errors: 'Missing email and password fields'});
    }
};

exports.isPasswordAndUserMatch = (req, res, next) => {
    try {
        UserModel.get(req.body.email).then(user => {
            user = user[0];
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                }
                if (result) {
                    req.body = {
                        email: user.email
                    };
                    return next();
                } else {
                    return res.status(400).send({errors: ['Invalid e-mail or password']});
                }
            });
        }).catch((err) => {
            console.log(err);
            res.status(500).send(err);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({errors: err});
    }
};