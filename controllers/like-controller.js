const LikesService = require('../service/LikeService')
const likeService = new LikesService()
class LikeController {
    static async ToogleLike(req,res,next) {
        try {
            const { modelId, modelType } = req.query
            const { userId } = req.body
            // for now only when user is not created and authorized 
            const response = await likeService.toggleLike(modelId, modelType, userId)
            return res.status(201).json({
                status: 'success',
                data: response,
                message: 'Sucessfuly liked'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                data: {},
                mesage: 'Something went wrong'

            })

        }
    }
}


module.exports = LikeController