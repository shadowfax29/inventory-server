const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ error: "Token is required" });
    }

    try {
        const check = jwt.verify(token, "inventry");
        req.user = { userId: check.userId };
        next();
    } catch (err) {
        console.error("Authentication error:", err.message);
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = authenticate;
