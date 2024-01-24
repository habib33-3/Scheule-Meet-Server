import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res
                .status(401)
                .json({
                    message: "Unauthorized: token is missing",
                    success: false,
                });
        }

        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .json({
                        message: "Unauthorized: Invalid token",
                        success: false,
                    });
            }

            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error("Error during verifying token", error);
        return res
            .status(500)
            .json({
                message: "Internal Server Error: Token verification failed",
                success: false,
            });
    }
};

export default verifyToken;
