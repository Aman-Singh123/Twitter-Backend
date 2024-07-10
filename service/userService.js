const UserRepository = require('../repositary/user-repositary')

class UserServices {
    constructor() { 
        this.userRepository = new UserRepository()

    }
    async signup(data) { 
        try {
            const user = await this.userRepository.create(data)
            return user
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = UserServices