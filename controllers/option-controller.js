const Option = require('../models/option');
const Question = require('../models/question');

module.exports.delete = async function(req, res){
    try {
        const id = req.params.id;
        const option = await Option.findById(id);
        if(!option){
            return res.status(400).json({
                error: "Option not found"
            })
        }
        if(option.votes>0){
            return res.status(400).json({
                error: "Can't delete this option as it has votes"
            })
        }
        await option.deleteOne();
        res.status(200).json({
            message: "Deleted successfully!"
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports.vote = async function(req, res){
    try {
        const id = req.params.id;
        const option = await Option.findById(id);
        if(!option){
            return res.status(400).json({
                error: "Option not found"
            })
        }
        await Option.updateOne({_id: option._id}, {$set:{votes :option.votes+1}});
        console.log(option);
        await Question.updateOne({_id: option.question}, {$set:{vote :true}});
        return res.status(200).json({
            message: "Your vote added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

