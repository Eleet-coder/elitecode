import { UserController } from "../Types"
import { pool } from "./models/model"

let userController : UserController = {} as UserController

userController.signup = (req, res, next) => {
    return next()
}

userController.login = (req, res, next) => {
    req.body

    const loginQuery = `INSERT INTO public.users ()
    VALUES ($1, $2, $3)
    `
    const queryOptions = []
    // pool.query(loginQuery, queryOptions)
    pool.query('SELECT * FROM public.users')

    return next()
}

export default userController