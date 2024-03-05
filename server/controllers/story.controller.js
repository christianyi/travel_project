const Story = require('../models/story.model')

module.exports = {
    //find all
    findAllStories: (req, res) => {
        Story.find()
            .then((allStories) => {
                res.status(200).json(allStories)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //find one
    findOneStory: (req, res) => {
        console.log(req.params);
        Story.findOne({_id: req.params.id})
            .then((oneStory) => {
                res.status(200).json(oneStory)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //create 
    createStory: (req, res) => {
        console.log(req.body);
        Story.create(req.body)
        .then((newStory) => {
            res.status(201).json(newStory)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    //update/edit
    editStory: (req, res) => {
        Story.findOneAndUpdate({ _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedStory) => {
                res.status(200).json(updatedStory)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    
    //delete
    deleteStory: (req, res) => {
        Story.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }


}