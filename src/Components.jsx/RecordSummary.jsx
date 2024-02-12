import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

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

export default function RecordSummary() {
  return (
    <Card className="w-full bg-transparent" shadow={false}>
      <List>
        {TopPlayerCategory.map((arr) =>
          arr.map((run, index) => (
            <ListItem
              className={`hover:bg-transparent focus:bg-black flex justify-between relative`}
              key={index}
            >
              <div
                className={
                  run.name === "AngeL1C"
                    ? `absolute bg-[url("/Backgrounds/cat.gif")] h-full w-full bg-center bg-contain -z-10 opacity-20 rounded-2xl top-0 left-0 border-2 border-black bg-black`
                    : `absolute bg-[url("/Backgrounds/rain.gif")] h-full w-full bg-center bg-contain -z-10 opacity-60 rounded-2xl top-0 left-0 border-2 border-black`
                }
              ></div>
              <div className="relative mx-auto flex-1 text-center hidden md:block">
                <Avatar src={run.ava} size="lg" className="p-1" />

                <Avatar
                  src={
                    run.heat < 60
                      ? `rings/green-card.gif`
                      : run.heat === 64
                      ? `rings/purple-card.gif`
                      : `rings/blue-card.gif`
                  }
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="lg"
                />
              </div>

              <div className="flex-1 me-2">
                <Typography
                  variant="h6"
                  color={
                    run.heat < 60
                      ? `light-green`
                      : run.heat === 64
                      ? `pink`
                      : `light-blue`
                  }
                  className="font-customFont"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="flex-1">
                <img
                  src={`actual-arms/${run.aspect}-${run.weapon}.png`}
                  className="rounded-2xl mx-auto shadow-[0_0_30px_white]"
                  width={200}
                />
              </div>
              <div className="relative mx-auto flex-1 text-center">
                <Avatar
                  src={`arms/${run.weapon}-${run.aspect}.png`}
                  withBorder={true}
                  size="lg"
                  className="animate-spin-slow"
                />
                <Avatar
                  src={getAvatarRing(run.aspect)}
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="lg"
                />
              </div>

              <div className="flex-1 hidden md:block">
                <Typography
                  variant="h6"
                  color={
                    run.heat < 60
                      ? `light-green`
                      : run.heat === 64
                      ? `pink`
                      : `light-blue`
                  }
                  className="text-center font-customFont font-semibold"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="h6"
                  color="white"
                  className="text-center font-customFont font-normal"
                >
                  {run.weapon}
                </Typography>
              </div>

              <div className="flex-1">
                <Typography
                  variant="h4"
                  color={
                    run.heat < 60
                      ? `light-green`
                      : run.heat === 64
                      ? `pink`
                      : `light-blue`
                  }
                  className="text-center font-customFont font-bold"
                >
                  {run.heat}
                </Typography>
              </div>
            </ListItem>
          ))
        )}
      </List>
    </Card>
  );
}
