const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;
const JPSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

JPSchema.statics.signup = async function(name, email, password, phone) {
    // Validation
    if (!email || !password || !name || !phone) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Enter a valid email");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a strong password");
    }

    // Check if the email already exists
    const exist = await this.findOne({ email });
    if (exist) {
        throw Error("Email already exists");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create the admin
    const jp = await this.create({ name, email, phone, password: hash });
    return jp;
}

JPSchema.statics.login = async function(email, password) {
    // Validation
    if (!email || !password) {
        throw Error("Email and password are required");
    }

    // Check if the email exists
    const jp = await this.findOne({ email });
    if (!jp) {
        throw Error("Invalid email");
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, jp.password);
    if (!isMatch) {
        throw Error("Incorrect password");
    }

    return jp;
}

module.exports = mongoose.model('JOB Provider', JPSchema);
