import { Runs } from "./DataRuns";

let firstPage;
let secondPage;

Runs.sort((a, b) => (a.heat < b.heat ? 1 : -1));
function BreakList(arr) {
  let tempHalf;
  if (arr.length % 2 === 0) {
    tempHalf = arr.length / 2;
    firstPage = arr.slice(0, tempHalf);
    secondPage = arr.slice(tempHalf, arr.length1);
  } else {
    tempHalf = Math.floor(arr.length / 2);
    firstPage = arr.slice(0, tempHalf);
    secondPage = arr.slice(tempHalf, arr.length);
  }
}
BreakList(Runs);

export const allData = [firstPage, secondPage];
