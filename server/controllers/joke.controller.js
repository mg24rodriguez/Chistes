const broma = require("../models/jokes.model");

module.exports.findAllJoke = (req, res) => {
  broma.find()
    .then(allDaJoke => res.json({ Jokes: allDaJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	broma.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ jokes: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  broma.create(req.body)
    .then(newlyCreatedJoke => res.json({ jokes: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ jokes: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  broma.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
