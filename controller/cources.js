const model = require('../Model/model')


createCourse = async(req, res) => {

    try {
        const Cource = {
            Title: req.body.Title,
            description: req.body.description,
            start_date: new Date()
        }
        console.log(Cource);

        const insertData = await model.Course_profile.insertMany(Cource)
        res.json({
            message: 'New Cource Added',
            user: insertData
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'Cource is not inserted sucessfully',
            error: err

        })
    }
}


getAllCourse = async(req, res) => {
    try {
        const AllCourse = await model.Course_profile.find({})
        res.send({
            message: 'All Course!',
            user: AllCourse
        })
    } catch (err) {
        res.send({
            message: 'Course Data Not Found!',
            error: err
        })
    }
}
module.exports = { createCourse, getAllCourse }