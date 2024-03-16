const users = require("../Models/userModel");

exports.register=async(req,res)=>{
    console.log("Inside register function");
    try{
        const {username,email,password} = req.body
        console.log(`${username} ${email} ${password}`);
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json("user already exists")
        }
        else{
            const newUser = new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json("user created successfully")
        }
    }
    catch(err){
        res.status(500).json("server error")
    }
    res.status(200).json("Register request received")
}

exports.login=async(req,res)=>{
    const {email,password}=req.body

    try{
        const user = await users.findOne({email,password})
        if(user){
            res.status(200).json("login successfull")
        }
        else{
            res.status(402).json("invalid user")
        }
    }
    catch(err){
        res.status(500).json("server error"+err.message)
    }
}

