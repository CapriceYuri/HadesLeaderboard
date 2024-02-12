import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

import { allData } from "../Data/DataLogic";
import { getAvatarRing } from "../Data/FunctionLogic";

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

export default function RecordSummaryCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4">
      {TopPlayerCategory.map((arr) =>
        arr.map((run, index) => (
          <Card
            className={
              run.name === "AngeL1C"
                ? `bg-[url('/Backgrounds/cat.gif')] bg-transparent backdrop-hue-rotate-90 bg-cover bg-center border-2 border-white px-4 py-8`
                : `bg-transparent backdrop-hue-rotate-90 border-2 border-white px-4 py-8`
            }
            key={index}
          >
            <div className="text-center relative">
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
                  className="mx-auto backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="relative mx-auto text-center">
                <Avatar
                  src={`arms/${run.weapon}-${run.aspect}.png`}
                  withBorder={true}
                  size="lg"
                />
                <Avatar
                  src={getAvatarRing(run.aspect)}
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="lg"
                />
              </div>

              <div className="flex justify-evenly items-center py-2">
                <Typography
                  variant="h4"
                  color="white"
                  className="text-center backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="h3"
                  color={
                    run.heat < 60
                      ? `light-green`
                      : run.heat === 64
                      ? `pink`
                      : `light-blue`
                  }
                  className="text-center backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.heat}
                </Typography>
              </div>

              <div>
                <img
                  src={`actual-arms/${run.aspect}-${run.weapon}.png`}
                  className="rounded-2xl mx-auto shadow-[0_0_20px_pink]"
                  width={200}
                />
              </div>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
}
