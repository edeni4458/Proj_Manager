const mongoose = require('mongoose')
const ProductManSchema = new mongoose.Schema({
    full_name:{
        type: String,
        required: [true, "Full name required"],
        minlength: [5, "Full name must be 5 characters long"]
    },
    phone:{
        type: Number,
        required: [true, "Phone number required"],
        min: [7, "Phone number requires a minimum of  7 numbers"],
        maxlength: [15, "Phone must be 5 numbers long"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        minlength: [5, "Email must have at least 5 characters"]
    },
    news: {
        type: Boolean,
        required: [false]
    }
}, {timestamps: true})


module.exports = mongoose.model('ProductMan', ProductManSchema)