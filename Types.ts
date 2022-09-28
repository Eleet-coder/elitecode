// declare module "*.png" {
  import { Request, Response, NextFunction, RequestHandler } from "express";

//   const value: any;
//   export value;

  export type UserController = {
    signup: (req: Request, res: Response, next: NextFunction) => any;
    login: (req: Request, res: Response, next: NextFunction) => any;
  };
// }
