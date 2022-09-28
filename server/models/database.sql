DROP TABLE "public"."users_progress";
DROP TABLE "public"."users";
DROP TABLE "public"."problems_tag";
DROP TABLE "public"."problems";
-- DROP TABLE "public"."users";

CREATE TABLE public.users (
    "_id" serial NOT NULL UNIQUE,
    "username" varchar NOT NULL UNIQUE,
    "password" varchar NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.users_progress (
    "_id" serial NOT NULL,
    "users_id" bigint NOT NULL,
    "problems_id" bigint NOT NULL,
    "progress_code" varchar(8000),
    CONSTRAINT "users_progress_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.problems (
    "_id" serial NOT NULL,
    "problems_name" varchar NOT NULL,
    "prompt" varchar(8000) NOT NULL,
    "solution_code" varchar(8000) NOT NULL,
    "test_code" varchar(8000) NOT NULL,
    CONSTRAINT "problems_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.problems_tag (
    "_id" serial NOT NULL,
    "tag_name" varchar NOT NULL,
    "problems_id" bigint,
    CONSTRAINT "problems_tag_pk" PRIMARY KEY ("_id")
) WITH (
    OIDS=FALSE
);


ALTER TABLE public.users_progress ADD CONSTRAINT "users_progress_fk0" FOREIGN KEY ("users_id") REFERENCES public.users("_id");
ALTER TABLE public.users_progress ADD CONSTRAINT "users_progress_fk1" FOREIGN KEY ("problems_id") REFERENCES public.problems("_id");

ALTER TABLE public.problems_tag ADD CONSTRAINT "problems_tag_fk0" FOREIGN KEY ("problems_id") REFERENCES public.problems("_id");


INSERT INTO public.users 
VALUES (1, 'test', 'test');

INSERT INTO public.problems ("_id", "problems_name", "prompt", "solution_code", "test_code")
VALUES (1, 'max-depth',
'Given an arbitrarily nested array of arrays, return the maximum depth.
For example:
maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)
maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)
maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)
maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)',

'const maxDepth = arr => {
    let subDepth = 0;
    
    arr.forEach(el => {
      if (Array.isArray(el))
        subDepth = Math.max(maxDepth(el), subDepth);
    });
    
    return subDepth + 1;
  };
  
  module.exports = {maxDepth};',

  'const {maxDepth} = require("../challenges/max-depth.js");
describe("maxDepth test", () => {
  it("handles non-nested arrays", () => {
    expect(maxDepth([3, 2])).toBe(1);
    expect(maxDepth([7, 8, 0, 9])).toBe(1);
  });
  
  it("handles arbitrarily nested arrays", () => {
    expect(maxDepth([3, [6, 7], 2])).toBe(2);
    expect(maxDepth([[2, 1], 8, 3, [4], 5])).toBe(2);
    expect(maxDepth([3, [6, [7]], 2])).toBe(3);
    expect(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]])).toBe(4);
    expect(maxDepth([1, [2, 4], 2, [[2], 4], 6])).toBe(3);
  });
  
  it("handles empty arrays"", () => {
    expect(maxDepth([])).toBe(1);
    expect(maxDepth([3, [], 2])).toBe(2);
  });
});'
);

INSERT INTO public.problems VALUES (2, 'generate-parentheses',
'Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.
For example, given n = 2, a solution set is:
[
  "(())",
  "()()"
]
Given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
Given n = 0, a solution set is:
[
  ""
]',

'const generateParentheses = n => {
  const results = [];
  
  const generate = (str, l, r) => {
    if (r === 0) {
      results.push(str);
      return;
    }
    
    if (l > 0)
      generate(str + "(", l - 1, r);
    
    if (l < r)
      generate(str + ")", l, r - 1);
  };
  
  generate("", n, n);
  return results;
}
module.exports = {generateParentheses};',

'const {generateParentheses} = require("../challenges/generate-parentheses.js");
describe("generateParentheses test", () => {
  let output;
  const normalize = results => results.sort();
  
  it("generates combinations of well-formed parentheses", () => {
    output = ["(())", "()()"];
    expect(normalize(generateParentheses(2))).toEqual(normalize(output));
    output = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    expect(normalize(generateParentheses(3))).toEqual(normalize(output));
  });
  
  it("handles base cases", () => {
    output = [""];
    expect(normalize(generateParentheses(0))).toEqual(normalize(output));
    output = ["()"];
    expect(normalize(generateParentheses(1))).toEqual(normalize(output));
  });
});'
);

INSERT INTO public.problems_tag VALUES (1, 'Easy', 1);
INSERT INTO public.problems_tag VALUES (2, 'Array', 1);

INSERT INTO public.problems_tag VALUES (3, 'Medium', 2);
INSERT INTO public.problems_tag VALUES (4, 'Array', 2);
INSERT INTO public.problems_tag VALUES (5, 'Recursion', 2);