const LikeModel = require('../models/likes')

const CrudRepository = require('./crudRepositary')

class LikeRepository extends CrudRepository {
    constructor() {
        super(LikeModel)
    }

    async findByUserAndLikeable(data) {
        try {
            const result = await LikeModel.findOne(data)
            return result
        } catch (error) {
            console.log("Error in like Repo find user ")
            throw error
        }
    }


}


module.exports = LikeRepository

