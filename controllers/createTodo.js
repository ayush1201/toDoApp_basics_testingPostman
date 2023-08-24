// import the model
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async(req,res) => {
    try{
        // extract title,description from body
        const {title,description} = req.body;
        // create new Todo object and insert in DB
        const response = await Todo.create({title,description});
        // send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}