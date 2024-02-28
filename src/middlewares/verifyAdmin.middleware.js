import { User } from "../models/user.model.js";

const verifyAdmin = async (req, res, next) => {
    try {
        const { email } = req.user;

        const user = await User.findOne({ email });

        const isAdmin = user?.role === "admin";

        if (!isAdmin) {
            return res.status(401).json({
                message: "forbidden, not an admin",
            });
        }

        next();
    } catch (error) {
        console.error("error during verifying admin", error);
    }
};

export default verifyAdmin;
