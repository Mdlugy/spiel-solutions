const Spiel = require("../models/spiel.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createSpiel = (req, res) => {
    Spiel.create(req.body)
        .then(newSpiel => res.json(newSpiel))
        .catch(err => res.status(400).json({ message: "Something went wrong when creating a Spiel!!", error: err }))
}

// READ ONE
module.exports.findOneSpiel = (req, res) => {
    Spiel.find({ _id: req.params._id })
        .then(singleSpiel => res.json(singleSpiel))
        .catch(err => res.json({ message: "Something went wrong when finding one Spiel!!", error: err }))
}

// READ ALL
module.exports.findAllSpiels = (req, res) => {
    Spiel.find()
        .then(allSpiels => res.json(allSpiels))
        .catch(err => res.json({ message: "Something went wrong when finding all the Spiels!!", error: err }))
}

// UPDATE
module.exports.updateSpiel = (req, res) => {
    Spiel.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
        .then(updatedSpiel => res.json(updatedSpiel))
        .catch(err => res.status(400).json({ message: "Something went wrong when updating a Spiel!!", error: err }))
}

// DELETE
module.exports.deleteSpiel = (req, res) => {
    Spiel.deleteOne({ _id: req.params._id })
        .then(deletedSpiel => res.json(deletedSpiel))
        .catch(err => res.json({ message: "Something went wrong when deleting the Spiel!!", error: err }))
}

// Find all by Script Name
module.exports.findByScriptName = (req,res) => {
    Spiel.find({scriptName: req.params.scriptName})
        .then(spiels => res.json(spiels))
        .then(console.log(req.params.scriptName))
        .catch(err => res.json(err));
}

// Update modalArr or pageArr of parent element
module.exports.createLink = (req, res) => {
    Spiel.findOneAndUpdate({id: req.params.parent_id}, req.body, { new: true })
    .then(spiel => {
        if (req.body.element == 'Page'){
            spiel.pageArr.push({id: req.params.child_id, name: req.params.child_name})
        }
        if (req.body.element == 'Modal'){
            spiel.modalArr.push({id: req.params.child_id, name: req.params.child_name})
        }
        else {
            return {message: 'element is neither modal or page'}
        }
        return spiel.save();
    })
    .then(saveRes => res.json(saveRes))
    .catch(err => res.json(err));
}
