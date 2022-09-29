import { UserController } from "../Types"
import { pool } from "./models/model"

let userController: UserController = {} as UserController

userController.login = async (req, res, next) => {
    const { username, password } = req.body

    const loginQuery = `SELECT * FROM public.users WHERE username=$1 AND password=$2`        
    const queryOptions = [username, password]
    try {
        const queryResult: any = await pool.query(loginQuery, queryOptions);
        if (!queryResult.rows) next('Rows does not exist')
        const result: any[] = queryResult.rows;
        if ( result.length === 1){
            console.log('login successful', result);
            res.locals.userId = result[0]._id;
            return next()
        } else {
            return next({message:{err: 'no matching password username combo'}})
        }
    } catch (error) {
        console.log('error caught', error)
        return next(error)
    }}

userController.signup = async (req, res, next) => {
    const { username, password, email } = req.body

    const loginQuery = `INSERT INTO public.users ("username", "password")
    VALUES ($1, $2)`
    
    const queryOptions = [username, password]
    try {
        const result = await pool.query(loginQuery, queryOptions);
        // console.log('it this promise', result)
        return next();
    } catch (error) {
        console.log('error caught', error)
        return next({message:{err: 'Username already taken, Please try a different one'}})
    }
}

export default userController;
