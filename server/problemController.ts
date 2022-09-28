import { ProblemController } from "../Types"


let problemController: ProblemController = {} as ProblemController

problemController.getProblems = (req, res, next) => {
    return next();
}

problemController.saveProblems = (req, res, next) => {
    return next();
}

export default problemController;