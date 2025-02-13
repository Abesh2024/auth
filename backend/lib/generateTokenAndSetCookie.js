const jwt=require("jsonwebtoken")



const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,  //ms
        sameSite: 'None',
        secure: true,
        httpOnly: true,
        path: '/',
    })
}

module.exports= generateTokenAndSetCookie
