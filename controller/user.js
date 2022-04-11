const model = require('../Model/model')


createUser = async(req, res) => {

    try {
        const users = {
            Name: req.body.Name,
            phone: req.body.phone,
            Email: req.body.Email,
            password: req.body.password
        }
        console.log(users);

        const insertData = await model.user_profile.insertMany(users)
        res.json({
            message: 'New user Added',
            user: insertData
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'Email id already exits!',
            error: err

        })
    }
}


getAllUser = async(req, res) => {
    try {
        const allUsers = await model.user_profile.find({})
        res.send({
            message: 'All User!',
            user: allUsers
        })
    } catch (err) {
        res.send({
            message: 'Data Not Found!',
            error: err
        })
    }
}

module.exports = { createUser, getAllUser }