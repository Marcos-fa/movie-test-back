const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs');

const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},{timestamps: true})

User.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

User.methods.matchPassword = async function(password) {
    await bcrypt.compare(password, this.password);
}


module.exports = model('user', User)