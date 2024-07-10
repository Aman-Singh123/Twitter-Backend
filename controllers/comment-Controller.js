const CommentService = require('../service/CommentService')
const CommServ = new CommentService()

class CommentController {
    static async CreateComment(req, res, next) {
        try {
            const { content, userId } = req.body
            const { modelId, modelType } = req.query
            const comment = await CommServ.CreateComment(modelId, modelType, userId, content)
            return res.status(201).json({
                success: true,
                message: 'Comment created successfully',
                data: comment
            })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                success: false,
                data: {},
                mesage: 'Something went wrong'

            })
        }
    }
}

module.exports = CommentController