const StoryController = require ('../controllers/story.controller')

module.exports = (app) => {
    //find all 
    app.get('/api/stories', StoryController.findAllStories)

    //find one
    app.get('/api/stories/:id', StoryController.findOneStory),

    //create 
    app.post('/api/createStory',StoryController.createStory),

    //update
    app.put('/api/editStory/:id', StoryController.editStory),
    
    //delete
    app.delete('/api/deleteStory/:id',StoryController.deleteStory)

}