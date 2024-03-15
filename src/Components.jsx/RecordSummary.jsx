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
  let highestHeat;
  if (arr[0].hyper === undefined) {
    highestHeat = arr[0].heat;
  } else {
    highestHeat = arr[1].heat;
  }
  TopPlayerCategory.push(
    arr.filter((run) => run.heat === highestHeat && run.hyper === undefined)
  );
  // let tempArr = arr.filter(
  //   (run) => run.heat === highestHeat && run.hyper === undefined
  // );
  // TopPlayerCategory.push(tempArr[0]);
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
console.log(TopPlayerCategory);
export default function RecordSummary() {
  return (
    <Card className="w-full bg-transparent" shadow={false}>
      <List>
        {TopPlayerCategory.map((obj) =>
          obj.map((run, index) => (
            <ListItem
              className={`hover:bg-black focus:bg-black flex justify-between relative`}
              key={index}
            >
              <div className="relative mx-auto flex-1 text-center hidden md:block">
                <Avatar src={run.ava} size="md" className="p-1" />

                <Avatar
                  src={
                    run.heat === 64
                      ? `rings/red-card.gif`
                      : run.heat < 60
                      ? `rings/green-card.gif`
                      : `rings/blue-card.gif`
                  }
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="md"
                />
              </div>
              <div className="flex-1 text-center">
                <Typography
                  variant="h6"
                  color={
                    run.heat === 64 ? "pink" : run.heat < 60 ? "green" : "blue"
                  }
                  className="font-customFont"
                >
                  {run.name}
                </Typography>
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

// Removed map.method into another layer becauses not [[]] anymore, just [].
