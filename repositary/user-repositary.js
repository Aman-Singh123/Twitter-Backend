const UserModel = require('../models/User')

const CrudRepository = require('./crudRepositary')

class UserRepository extends CrudRepository {
    constructor() {
        super(UserModel)
    }

    async  getUserByEmail(email) {
        const user = await UserModel.findOne({ email: email })
        return user
        
    }
    


}

module.exports = UserRepository