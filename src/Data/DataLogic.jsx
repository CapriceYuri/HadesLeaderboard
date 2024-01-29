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
FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));
const ogData = FullData.sort((a, b) => (a.heat < b.heat ? 1 : -1));
const mData = FullData.filter((run) => run.category === "Modded");
const uData = FullData.filter((run) => run.category === "Unseeded");
const sData = FullData.filter((run) => run.category === "Seeded");
const aspectZeus_Data = FullData.filter((run) => run.aspect === "Zeus");
const aspectRama_Data = FullData.filter((run) => run.aspect === "Rama");
const aspectEris_Data = FullData.filter((run) => run.aspect === "Eris");
const aspectBeowulf_Data = FullData.filter((run) => run.aspect === "Beowulf");
const aspectZagreusBow_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Bow"
);
const aspectZagreusFists_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Fists"
);
const aspectZagreusRail_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Rail"
);
const aspectZagreusSpear_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Spear"
);
const aspectZagreusShield_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Shield"
);
const aspectZagreusSword_Data = FullData.filter(
  (run) => run.aspect === "Zagreus" && run.weapon === "Sword"
);

const aspectNemesis_Data = FullData.filter((run) => run.aspect === "Nemesis");
const aspectHestia_Data = FullData.filter((run) => run.aspect === "Hestia");
const aspectDemeter_Data = FullData.filter((run) => run.aspect === "Demeter");
const aspectChiron_Data = FullData.filter((run) => run.aspect === "Chiron");
const aspectGuanYu_Data = FullData.filter((run) => run.aspect === "Guan Yu");
const aspectPoseidon_Data = FullData.filter((run) => run.aspect === "Poseidon");
const aspectLucifer_Data = FullData.filter((run) => run.aspect === "Lucifer");
const aspectAchilles_Data = FullData.filter((run) => run.aspect === "Achilles");
const aspectHades_Data = FullData.filter((run) => run.aspect === "Hades");
const aspectArthur_Data = FullData.filter((run) => run.aspect === "Arthur");
const aspectChaos_Data = FullData.filter((run) => run.aspect === "Chaos");
const aspectTalos_Data = FullData.filter((run) => run.aspect === "Talos");
const aspectHera_Data = FullData.filter((run) => run.aspect === "Hera");
const aspectGilgamesh_Data = FullData.filter(
  (run) => run.aspect === "Gilgamesh"
);

const armsSword_Data = FullData.filter((run) => run.weapon === "Sword");
const armsShield_Data = FullData.filter((run) => run.weapon === "Shield");
const armsFists_Data = FullData.filter((run) => run.weapon === "Fists");
const armsSpear_Data = FullData.filter((run) => run.weapon === "Spear");
const armsRail_Data = FullData.filter((run) => run.weapon === "Rail");
const armsBow_Data = FullData.filter((run) => run.weapon === "Bow");

const allData = [
  ogData,
  mData,
  uData,
  sData,
  aspectAchilles_Data,
  aspectArthur_Data,
  aspectBeowulf_Data,
  aspectChaos_Data,
  aspectChiron_Data,
  aspectDemeter_Data,
  aspectEris_Data,
  aspectGilgamesh_Data,
  aspectGuanYu_Data,
  aspectHades_Data,
  aspectHera_Data,
  aspectHestia_Data,
  aspectLucifer_Data,
  aspectNemesis_Data,
  aspectPoseidon_Data,
  aspectRama_Data,
  aspectTalos_Data,
  aspectZagreusBow_Data,
  aspectZagreusFists_Data,
  aspectZagreusRail_Data,
  aspectZagreusSpear_Data,
  aspectZagreusShield_Data,
  aspectZagreusSword_Data,
  aspectZeus_Data,
  armsBow_Data,
  armsFists_Data,
  armsRail_Data,
  armsSpear_Data,
  armsShield_Data,
  armsSword_Data,
];
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
