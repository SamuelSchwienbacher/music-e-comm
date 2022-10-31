const UsersModel = require('../models/users.model');
const config = require('../../common/config/env.config');
const bcrypt = require('bcrypt'); 

exports.create = (req, res) => {
    try { 
        bcrypt.genSalt(config.salt_rounds, function(err, salt) {
            if (err)
                throw err;
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if (err)
                    throw err;
                req.body.password = hash;
                UsersModel.createUser(req.body).then(result => {
                    console.log(result);
                    res.status(201).send({email: result.email});
                }).catch((err) => {
                    console.log(err);
                    res.status(500).send(err);
                });
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.addarticles = (req, res) => {
    try {
        UsersModel.addArticles(req.body.articles, req.params.email).then(result => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
};