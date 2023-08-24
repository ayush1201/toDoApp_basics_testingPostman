// import the model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async(req,res) => {
    try{
        // fetch all the data
        const todos = await Todo.find({});

        // update response with flags
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"Entire data is fetched",
            }
        );
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",

        });

    }
}


exports.getTodoById = async(req,res) => {
    try{
        // fetch all the data
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with iven id"
            });
        }

        // update response with flags
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"The particular id data is fetched",
            }
        );
    }
    catch(err){
        console.error(err);
        // console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}