import { FullData } from "./ImportData";

// Find Total Unique Player
let tempPlayerArr = [];
function findTotalPlayer() {
  for (let i = 0; i < FullData.length; i++) {
    if (tempPlayerArr.indexOf(FullData[i].name) === -1) {
      tempPlayerArr.push(FullData[i].name);
    }
  }
}
findTotalPlayer();
const uniquePlayers = tempPlayerArr.length;
const totalRuns = FullData.length;
//
const ogData = FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));
const mData = FullData.filter((run) => run.category === "Modded");
const uData = FullData.filter((run) => run.category === "Unseeded");
const sData = FullData.filter((run) => run.category === "Seeded");
const allData = [ogData, mData, uData, sData];
//

// Assign The Actual List
export function BreakList(arr) {
  // Find Page Amount
  let totalPages = [];
  let eachPages = [];
  let pageNeeded = Math.ceil(arr.length / 25);
  for (let j = 1; j <= pageNeeded; j++) {
    let temp = j;
    totalPages.push(temp);
  }
  // Assign runs
  eachPages[0] = arr.slice(0, 25);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * 25, (i + 1) * 25);
  }
  eachPages[totalPages.length - 1] = arr.slice(
    (pageNeeded - 1) * 25,
    arr.length
  );
  return { eachPages, totalPages };
}

//
export { totalRuns, uniquePlayers, allData };
