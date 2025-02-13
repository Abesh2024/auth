const jwt=require("jsonwebtoken")



const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,  // 15 days
        sameSite: "None",  // Ensures cross-origin requests work
        secure: true,  // Required for HTTPS environments (production)
        httpOnly: true,  // Prevents JavaScript access for security
        path: "/",  // Accessible across all routes
        domain: "yourdomain.com",  // Set your actual frontend domain (if needed)
    })    
}

module.exports= generateTokenAndSetCookie
