import { CookieController } from "../Types"


let cookieController: CookieController = {} as CookieController

cookieController.giveCookie = (req, res, next) => {
    const userId = res.locals.userId;
    res.cookie('userId', userId, {httpOnly: true});
    return next();
}

cookieController.checkCookie = (req, res, next) => {
    res.locals.userId = req.cookies.userId;
    return next();
}

export default cookieController;