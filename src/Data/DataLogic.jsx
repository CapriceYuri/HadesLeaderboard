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

const ogData = FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));
const mData = FullData.filter((run) => run.category === "Modded");
const uData = FullData.filter((run) => run.category === "Unseeded");
const sData = FullData.filter((run) => run.category === "Seeded");

// Assign The Actual List
const totalPages = [];
export const eachPages = [];

export function BreakList(arr, num) {
  // Find Page Amount
  let pageNeeded = Math.ceil(arr.length / num);
  for (let j = 1; j <= pageNeeded; j++) {
    let temp = j;
    totalPages.push(temp);
  }
  // Assign runs
  eachPages[0] = arr.slice(0, num);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * num, (i + 1) * num);
  }
  eachPages[totalPages.length - 1] = arr.slice(
    (pageNeeded - 1) * num,
    arr.length
  );
}
BreakList(ogData, 20);

export const totalRuns = FullData.length;
export const allData = [...eachPages];
export { totalPages, uniquePlayers, ogData, mData, uData, sData };
