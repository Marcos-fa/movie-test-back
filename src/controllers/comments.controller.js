const Comment = require('../models/comments');

const commentsCtrl = {};

commentsCtrl.getComments = async (req, res) => {
    try {
        console.log('entra a getComments')
        let comments = await Comment.find();
        console.log(comments);
        res.json({ok: true, comments: comments});
    } catch (err) {
        console.log(err)
        res.send('Internal Server Error');
    }
}

commentsCtrl.addComment = async (req, res) => {
    try {
        console.log(req.body)
        const { movieId, userId, comment } = req.body;

        const commentModel = new Comment({ movieId, userId, comment });
        await commentModel.save();
        console.log(commentModel);
        res.json({
            ok: true,
            comment: commentModel,
        })

    } catch (error) {
        console.log(error);
        res.send('Internal Server Error');
    }
}

module.exports = commentsCtrl;