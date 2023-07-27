const db = require("../models");
const scoreRepository = db.score



// Création d'un score
exports.postScore =(req, res) => {
    if (!req.body.username || !req.body.score) {
        res.status(400).send({
            message: "Pas d'enregistrement des scores possible"
        });
        return;
    }

    scoreRepository.create({
        username: req.body.username,
        score: req.body.score
    })
        .then(
            res.status(201).send({
                message: `Le score a bien été ajouté.`
            })
        )
        .catch(err => {
            res.status(500).send({
                message : err.message || "Le serveur ne répond pas."
            });
        });
};


//Récupération de tous les scores
exports.getScores = (req, res) => {
    scoreRepository.findAll({ where: null })
        .then(scores => {
            res.send(scores);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Le serveur ne répond pas."
            });
        });
};

//Suppression de tous les scores
exports.deleteScores = (req, res) => {
    scoreRepository.destroy({ where: {}})
        .then(
            res.status(200).send({
                message: `Le tableau des scores a été effacé.`
            })
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Le serveur ne répond pas."
            });
        });
};