import { Request, Response, NextFunction, RequestHandler } from 'express';
import userController from '/Users/lennysutrisno/Documents/GitHub/elitecode/server/userController';
import "@testing-library/jest-dom/extend-expect";


describe('This should pass', () => {
    test('this should pass test', () => {
        expect(2).toBe(2)
    })
})


describe('Test Signup middleware', () => {

    let res: Response = {} as Response;
    let req: Request = {} as Request;
    const next: NextFunction = jest.fn();

    beforeEach(() => {
        res = {} as Response;
        req = {} as Request;
    })

    test('Test the Signup', async () => {

        await userController.signup(req, res, next)
        
        expect(next).toHaveBeenCalled()
        
    })
    
    test('Signup should sign someone up', async () => {
        req.body = {
            username: 'username',
            password: 'password',
            email: 'someone@somewhere.com'
        }


        await userController.signup(req, res, next)

        

    })


})











    // const mockRequest = (sessionData, body) => ({
    //     session: { data: sessionData },
    //     body,
    //   });

    //   const mockResponse = () => {

    //     res.locals = {
    //       spotify_id: 'sample_spotify_id',
    //       display_name: 'sample_display_name'
    //     };

    //     res.status = jest.fn().mockReturnValue(res);
    //     res.json = jest.fn().mockReturnValue(res);
    //     // return res;
    // );
