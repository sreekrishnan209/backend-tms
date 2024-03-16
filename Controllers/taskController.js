const tasks = require('../Models/taskModel')

exports.addUserTask = async(req,res)=>{
    console.log("Inside addUserTask");

    const userId=req.payload

    const {title,description,startDate,endDate,status,progressPercentage}=req.body

    console.log(userId,title,description,startDate,endDate,status,progressPercentage);

    // logic for add
    try{
        const existingTask=await tasks.findOne({title})
        if(existingTask){
            res.status(402).json("task already exists")
        }
        else{
            const newTask=new tasks({
                title,description,startDate,endDate,status,progressPercentage,userId
            })
            await newTask.save()
            res.status(200).json(newTask)
        }

    }
    catch(err){
        res.status(404).json({message:err.message})
    }

}

