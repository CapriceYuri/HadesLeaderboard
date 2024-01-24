import { FullData } from "./ImportData";

const totalPages = [];
const eachPages = [];

let tempPlayerArr = [];
// Find Total Unique Player
function findTotalPlayer() {
  for (let i = 0; i < FullData.length; i++) {
    if (tempPlayerArr.indexOf(FullData[i].name) === -1) {
      tempPlayerArr.push(FullData[i].name);
    }
  }
}
findTotalPlayer();
const uniquePlayers = tempPlayerArr.length;

FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));

// Function To Page Creation
let pageNeeded = Math.ceil(FullData.length / 25);
// 27 Pages
for (let j = 1; j <= pageNeeded; j++) {
  let temp = j;
  totalPages.push(temp);
}
// Assign The Actual List
function BreakList(arr) {
  // Add ListItems
  eachPages[0] = arr.slice(0, 25);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * 25, (i + 1) * 25);
  }
  eachPages[totalPages.length - 1] = arr.slice(650, arr.length);
}

BreakList(FullData);

export const totalRuns = FullData.length;
export const allData = [...eachPages];
export { totalPages, uniquePlayers };
