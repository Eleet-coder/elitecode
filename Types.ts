import { Request, Response, NextFunction, RequestHandler } from 'express';

export type UserController = {
    signup: (req: Request, res: Response, next: NextFunction) => any,
    login: (req: Request, res: Response, next: NextFunction) => any,
}

export type CookieController = {
    giveCookie: (req: Request, res: Response, next: NextFunction) => any,
    checkCookie: (req: Request, res: Response, next: NextFunction) => any,
}

export type ProblemController = {
    getProblems: (req: Request, res: Response, next: NextFunction) => any,
    saveProblems: (req: Request, res: Response, next: NextFunction) => any,
    getProgress: (req: Request, res: Response, next: NextFunction) => any,
}

