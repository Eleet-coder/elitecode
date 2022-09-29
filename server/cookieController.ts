import { CookieController } from "../Types"


let cookieController: CookieController = {} as CookieController

cookieController.giveCookie = (req, res, next) => {
    const userId = res.locals.userId;
    res.cookie('userId', userId, {httpOnly: true});
    return next();
}

cookieController.checkCookie = (req, res, next) => {

    console.log('checking cookie!');
    if (req.cookies.userId) {
        res.locals.userId = req.cookies.userId;
        console.log('cookie', res.locals.userId);
        return next();
    }

    res.locals.userId = 'No cookie';
    console.log('cookie', res.locals.userId);
    return next();
}

export default cookieController;