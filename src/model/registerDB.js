const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    newuser:{
        type: String,
    require:true,
    },
    contrasenaNewUser:{
        type: String,
        require:true,
    }

})

const User = mongoose.model('User', userSchema )

module.exports = User