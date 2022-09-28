// declare module "*.png" {
//     const value: any;
//     export default value;
//   }

import { Request, Response, NextFunction, RequestHandler } from 'express';

export type UserController = {
    signup : (req: Request, res: Response, next: NextFunction) => any,
    login : (req: Request, res: Response, next: NextFunction) => any,
}

