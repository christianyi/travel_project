const User = require('../models/user.model')

module.exports = {
    //find all
    findAllUsers: (req, res) => {
        User.find()
            .then((allUsers) => {
                res.status(200).json(allUsers)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //find one
    findOneUser: (req, res) => {
        console.log(req.params);
        User.findOne({_id: req.params.id})
            .then((oneUser) => {
                res.status(200).json(oneUser)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //create 
    createUser: (req, res) => {
        console.log(req.body);
        User.create(req.body)
        .then((newUser) => {
            res.status(201).json(newUser)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    //update/edit
    editUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedUser) => {
                res.status(200).json(updatedUser)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    
    //delete
    deleteUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }


}