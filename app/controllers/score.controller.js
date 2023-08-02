const db = require("../models");
const scoreRepository = db.score



// Création d'un score
exports.postScore =(req, res) => {
    if (!req.body.username || !req.body.score) {
        res.status(400).send({
            message: "Can't save scores."
        });
        return;
    }

    scoreRepository.create({
        username: req.body.username,
        score: req.body.score
    })
        .then(
            res.status(201).send({
                message: `Score saved.`
            })
        )
        .catch(err => {
            res.status(500).send({
                message : err.message || "Server not responding."
            });
        });
};


// Récupération de tous les scores
exports.getScores = (req, res) => {
    scoreRepository.findAll({ where: null })
        .then(scores => {
            res.send(scores);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Server not responding."
            });
        });
};