import { FullData } from "./ImportData";

let one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  one1,
  one2,
  one3,
  one4,
  one5,
  one6;

const totalPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const eachPages = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  one1,
  one2,
  one3,
  one4,
];

FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));

function BreakList(arr) {
  eachPages[0] = arr.slice(0, 50);
  for (let i = 1; i < totalPages.length - 1; i++) {
    eachPages[i] = arr.slice(i * 50, (i + 1) * 50);
  }
  eachPages[totalPages.length - 1] = arr.slice(650, arr.length);
}

BreakList(FullData);

export const allData = [...eachPages];
export { totalPages };
