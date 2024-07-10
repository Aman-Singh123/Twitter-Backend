const UserServices = require('../service/userService')

const userService = new UserServices()

class AuthController {
    static SignupUser = async (req, res, next) => {
        try {
            const user = await userService.signup(req.body)
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: user
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

module.exports = AuthController
