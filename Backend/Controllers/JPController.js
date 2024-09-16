const JP = require('../Modules/JPModule');
const jwt = require('jsonwebtoken');
// Function to create a JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, "Ak$jp", { expiresIn: '20d' });
}

const jpLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await JP.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email: user.email, token, name: user.name });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
const jpSignup = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const admin = await JP.signup(name, email, password, phone);
        const token = createToken(admin._id);
        res.status(200).json({ name: admin.name, email: admin.email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = { jpLogin,jpSignup};
