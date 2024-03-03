const UserController = require ('../controllers/user.controller')

module.exports = (app) => {
    //find all 
    app.get('/api/users', UserController.findAllUsers)

    //find one
    app.get('/api/users/:id', UserController.findOneUser),

    //create 
    app.post('/api/createUser',UserController.createUser),

    //update
    app.put('/api/editUser/:id', UserController.editUser),
    
    //delete
    app.delete('/api/deleteUser/:id',UserController.deleteUser)

}