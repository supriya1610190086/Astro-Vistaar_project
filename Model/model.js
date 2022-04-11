const mongoose = require('mongoose')
const validator = require('validator')

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/user'
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connection...');
    }).catch((err) => {
        console.log(err);
    })

const userCollection = mongoose.Schema({
    Name: {
        type: String,
        required: true

    },
    phone: {
        type: Number,
        required: [true, 'User phone number required'],
        min: [10, 'Your number should be of 10 digits only']

    },
    Email: {
        type: String,
        required: true,
        unique: [true, 'Email id already exits!'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is Invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Must be at least 6 ']

    }
})


const user_profile = mongoose.model('user', userCollection)


const CourseCollection = mongoose.Schema({
    Title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true,
    },

})


const Course_profile = mongoose.model('Course', CourseCollection)

module.exports = { user_profile, Course_profile }