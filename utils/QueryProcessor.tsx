import Parser from 'expr-eval';

function largest(str: string) {
  let arr = str.split(":");
  let l = arr[1];
  let b = l.split("?");
  let nums = b[0].split(",");
  let actual_nums : number[] = []
  for (let i = 0; i < nums.length; i++) {
    actual_nums.push(parseInt(nums[i], 10));
  }

  let res = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < actual_nums.length; i++) {
    res = Math.max(res, actual_nums[i]);
  }
  return res.toString();
}




export default function QueryProcessor(query: string): string {
  if (query == "What is your name?") {
    return "JK";
  }
  
  if (query.includes("Which of the following numbers is the largest")) {
    return largest(query);
  }

  if (query.includes("What is	") && query.includes("plus")) {
    return addition(query);
  }

  let shakespeare = "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
  "English poet, playwright, and actor, widely regarded as the greatest " +
  "writer in the English language and the world's pre-eminent dramatist."

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      shakespeare
    );
  } 
  return "Query: " + query;
}
