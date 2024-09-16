const JS = require('../Modules/JSModule');
const jwt = require('jsonwebtoken');
const createToken = (_id) => {
    return jwt.sign({ _id }, "Ak$js", { expiresIn: '20d' });
}
const jsLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await JS.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email: user.email, token, name: user.name,userid:user._id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
const jsSignup = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const user = await JS.signup(name, email, password, phone);
        const token = createToken(user._id);
        res.status(200).json({ name: user.name, email: user.email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
module.exports = { jsSignup, jsLogin};