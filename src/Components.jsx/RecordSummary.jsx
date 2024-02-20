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
              className={`hover:bg-black focus:bg-black flex justify-between relative`}
              key={index}
            >
              <div
                className={
                  run.heat === 64
                    ? `absolute h-full w-full bg-center bg-contain -z-10 rounded-xl top-0 left-0 border-4 border-black shadow-[inset_0_0_10px_white]`
                    : run.name === "AngeL1C"
                    ? `absolute h-full w-full bg-[url('/Backgrounds/cat-edit.gif')] bg-center bg-contain -z-10 rounded-xl top-0 left-0 border-4 border-black opacity-40`
                    : ``
                }
              />
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
                  color={`white`}
                  className="font-customFont"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="flex-1">
                <img
                  src={`actual-arms/${run.aspect}-${run.weapon}.png`}
                  className="rounded-2xl mx-auto shadow-[0_0_20px_white]"
                  width={200}
                  loading="lazy"
                />
              </div>
              <div className="relative mx-auto flex-1 text-center">
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

              <div className="flex-1 hidden md:block text-center">
                <Typography
                  variant="h6"
                  color="amber"
                  className="font-customFont font-semibold"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="font-customFont font-normal"
                >
                  {run.weapon}
                </Typography>
              </div>

              <div className="flex-1 text-center">
                <Typography
                  variant="h5"
                  color={
                    run.category === "Seeded"
                      ? "blue"
                      : run.category === "Modded"
                      ? "green"
                      : "orange"
                  }
                  className="font-customFont font-bold"
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
