const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwt middleware");
    next()

    
}

module.exports = jwtMiddleware