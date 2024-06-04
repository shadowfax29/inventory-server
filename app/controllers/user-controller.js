const bcryptjs = require("bcryptjs");
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const userController = {};

userController.create = async (req, res) => {
    const errors = validationResult(req); // Call validationResult as a function
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const body = req.body;
        const salt = await bcryptjs.genSalt();
        const hashPassword = await bcryptjs.hash(body.password, salt);
        body.password = hashPassword;
        const newUser = await User.create(body);
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

userController.login = async (req, res) => {
    const errors = validationResult(req); // Call validationResult as a function
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const auth = await bcryptjs.compare(password, user.password);
            if (auth) {
                const tokenData = {
                    userId: user._id
                };
                const token = jwt.sign(tokenData, "inventry", { expiresIn: "7d" });
                return res.json({ token });
            } else {
                return res.status(401).json({ error: "Invalid credentials" });
            }
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
userController.show=async(req,res)=>{
    try{
        const detail=await User.findOne(req.user.id)
        res.json(detail)
    }
    catch(err){
        res.json(err)
    }
}
module.exports = userController;
