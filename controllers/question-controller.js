const Question = require('../models/question');
const Option = require('../models/option');

module.exports.createQuestion = async function(req, res){
    try {
        const title = req.body;
        const question = await Question.create(title);
        res.status(200).json(question);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
};

module.exports.createOption = async function(req, res){
    try {
        const question = await Question.findById(req.params.id);
        if (!question){
            return res.status(404).json({ message: 'Question not found' });
        }
        const option = await Option.create({
            text: req.body.text
        });

        const link = `http://localhost:8000/option/${option.id}/add_vote`;

        await Option.updateOne({_id: option._id}, {$set:{add_vote :link}});

        const questionOptions = question.options;
        questionOptions.push(option._id);
        await Question.updateOne({_id: question._id}, {$set:{options :questionOptions}});
        return res.status(200).json(option);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
    
};

module.exports.viewOne = async function(req, res){
    try {
        const id = req.params.id;
        const question = await Question.findById(id);
        if(!question){
            return res.status(400).json({
                error: "Question not found"
            })
        }
        res.status(200).json(question);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports.view = async function(req, res){
    try {
        const question = await Question.find();
        res.status(200).json(question);
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}

module.exports.delete = async function(req, res){
    try {
        const id = req.params.id;
        const question = await Question.findById(id);
        if(!question){
            return res.status(400).json({
                error: "Question not found"
            })
        }
        await question.deleteOne();
        res.status(200).json({
            message: "Deleted successfully!"
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}
