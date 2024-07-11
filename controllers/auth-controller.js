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

    static loginUser = async (req, res, next) => {
        try { 
            const { email, password } = req.body
            const user = await userService.getUserByEmail(email)
            if (!user) { 
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'

                })
            }
            if (!user.comparePassword(password)) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid email or password'

                })
            }
            const token = await user.genJwt()
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                data: { token }
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
