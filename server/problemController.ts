import { ProblemController } from "../Types";
import { pool } from "./models/model";

let problemController: ProblemController = {} as ProblemController;

problemController.getProblems = async (req, res, next) => {
  let loginQuery;

  if (res.locals.userId === "No cookie") {
    loginQuery = `SELECT * FROM public.problems;`;
  } else {
    loginQuery = `SELECT * FROM public.problems 
    LEFT JOIN public.users_progress ON 
    public.problems._id = public.users_progress.problems_id;`;
  }

  try {
    const queryResult: any = await pool.query(loginQuery);
    if (!queryResult.rows) next("Rows does not exist");
    const result: any[] = queryResult.rows;
    if (result.length) {
    //   console.log("problems", result);
      res.locals.problems = result;
      return next();
    } else {
      return next({ message: { err: "no problems" } });
    }
  } catch (error) {
    console.log("error caught", error);
    return next(error);
  }
};

problemController.saveProblems = async (req, res, next) => {
  const {
    problems_id,
    progress_code,
  }: { problems_id: string; progress_code: string } = req.body;

  const userID: string = req.cookies.userId;

  const saveQuery: string = `INSERT INTO public.users_progress ("users_id", "problems_id", "progress_code")
    VALUES ( $1, $2, $3)`;

  const queryOptions: string[] = [userID, problems_id, progress_code];

  try {
    const queryResult: any = await pool.query(saveQuery);
    if (!queryResult.rows) next("Rows does not exist");
    const result: any[] = queryResult.rows;
      return next();
  } catch (error) {
    console.log("error caught", error);
    return next(error);
  }
};

problemController.getProgress = async (req, res, next) => {};

export default problemController;

// CREATE TABLE public.users_progress (
//     "_id" serial NOT NULL,
//     "users_id" bigint NOT NULL,
//     "problems_id" bigint NOT NULL,
//     "progress_code" varchar,
//     CONSTRAINT "users_progress_pk" PRIMARY KEY ("_id")
// ) WITH (
//     OIDS=FALSE
// );
