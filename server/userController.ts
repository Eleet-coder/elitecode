import { UserController } from "../Types"

let userController : Partial<UserController> = {}

userController.signup = (req, res, next) => {

    return next()
}

userController.login = (req, res, next) => {

    return next()
}

export default userController;