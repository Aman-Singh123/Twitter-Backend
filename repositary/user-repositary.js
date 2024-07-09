const UserModel = require('../models/User')

const CrudRepository = require('./crudRepositary')

class UserRepository extends CrudRepository {
    constructor() {
        super(UserModel)
    }
    


}

module.exports = UserRepository