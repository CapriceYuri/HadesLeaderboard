import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

import { allData, FullData } from "../Data/DataLogic";
import { calculateDate } from "../Data/DateCalculate";

const recordData = allData.slice(4, 28);
let TopPlayerCategory = [];
// Filter Function
function findTopPlayer(arr) {
  let highestHeat = arr[0].heat;
  TopPlayerCategory.push(arr.filter((run) => run.heat === highestHeat));
}
function removeDup(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}
// Execute Filtering
recordData.forEach((arr) => findTopPlayer(arr));

for (let i = 0; i < TopPlayerCategory.length; i++) {
  TopPlayerCategory[i] = removeDup(TopPlayerCategory[i], "ava");
}

// Find Player Total Function
function playerTotalRuns(pname) {
  let tempFile = structuredClone(FullData);
  let tempRuns = tempFile.filter((obj) => obj.name === pname);
  return tempRuns.length;
}

function player60PlusRuns(pname) {
  let tempFile = structuredClone(FullData);
  let tempRuns = tempFile.filter((obj) => obj.name === pname);
  let temp60Runs = tempRuns.filter((obj) => obj.heat >= 60);
  return temp60Runs.length;
}

function player64PlusRuns(pname) {
  let tempFile = structuredClone(FullData);
  let tempRuns = tempFile.filter((obj) => obj.name === pname);
  let temp64Runs = tempRuns.filter((obj) => obj.heat === 64);
  return temp64Runs.length;
}

function check64Runs(pname) {
  if (player64PlusRuns(pname) > 0) {
    return (
      <div className="text-center">
        <Typography
          variant="h6"
          color="pink"
          className="mx-auto font-customFont font-normal"
        >
          {`${player64PlusRuns(pname)} 64 run/s`}
        </Typography>
      </div>
    );
  }
}

export default function RecordSummaryCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4">
      {TopPlayerCategory.map((arr) =>
        arr.map((run, index) => (
          <Card
            className={`border-4 border-[#28282B] px-4 py-4 rounded-2xl relative bg-transparent hover:bg-black`}
            key={index}
          >
            <div
              className={
                run.name === "AngeL1C"
                  ? `absolute h-full w-full bg-[url('/Backgrounds/cat.gif')] bg-center bg-contain bg-no-repeat -z-10 rounded-xl top-0 left-0 bg-black`
                  : "absolute h-full w-full bg-black bg-center bg-contain -z-10 rounded-xl top-0 left-0"
              }
            />
            <div
              className={
                run.heat === 64
                  ? `text-center relative bg-[url('/Backgrounds/bg1.png')] bg-center bg-cover border-2 border-black rounded-2xl`
                  : run.heat >= 60
                  ? `text-center relative bg-[url('/Backgrounds/bg2.png')] bg-center bg-cover border-2 border-black rounded-2xl`
                  : `text-center relative bg-[url('/Backgrounds/bg3.png')] bg-center bg-cover border-2 border-black rounded-2xl`
              }
            >
              <Avatar
                variant="circular"
                withBorder={true}
                className="p-2"
                src={run.ava}
                size="xl"
              />
              <Avatar
                src={
                  run.heat < 60
                    ? `rings/green-card.gif`
                    : run.heat === 64
                    ? `rings/purple-card.gif`
                    : `rings/blue-card.gif`
                }
                className="absolute top-0 start-50 transform -translate-x-full"
                size="xl"
              />
            </div>

            <CardBody className="p-2">
              <div className="text-center">
                <Typography
                  variant="h5"
                  color="white"
                  className="mx-auto font-customFont"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="flex justify-evenly items-center py-2">
                <Typography
                  variant="h6"
                  color="amber"
                  className="text-center font-customFont"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="h4"
                  color={
                    run.category === "Seeded"
                      ? "blue"
                      : run.category === "Modded"
                      ? "green"
                      : "orange"
                  }
                  className="text-center font-customFont"
                >
                  {run.heat}
                </Typography>
              </div>

              <div>
                <img
                  src={`actual-arms/${run.aspect}-${run.weapon}.png`}
                  className="rounded-2xl mx-auto shadow-[0_0_20px_pink]"
                  width={200}
                  loading="lazy"
                />
              </div>

              <div className="text-center mt-4">
                <Typography
                  variant="h6"
                  color="white"
                  className="mx-auto font-customFont"
                >
                  {`${calculateDate(run.date)} Day/s Ago`}
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h6"
                  color="white"
                  className="mx-auto font-customFont font-normal"
                >
                  {`${playerTotalRuns(run.name)} total run/s`}
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h6"
                  color="white"
                  className="mx-auto font-customFont font-normal"
                >
                  {`${player60PlusRuns(run.name)} 60+ run/s`}
                </Typography>
              </div>
              {check64Runs(run.name)}
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
}
