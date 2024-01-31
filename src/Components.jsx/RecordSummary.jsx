import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { allData } from "../Data/DataLogic";

const recordData = allData.slice(4, 28);
console.log(recordData);
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

// TESTING
// TESTING
export default function RecordSummary() {
  return (
    <Card className="w-full bg-transparent" shadow={false}>
      <List>
        {TopPlayerCategory.map((arr) =>
          arr.map((run, index) => (
            <ListItem
              className="hover:bg-black focus:bg-black flex justify-between"
              key={index}
            >
              <div className="flex flex-row items-center gap-x-2 flex-1 justify-start">
                <Avatar
                  variant="rounded"
                  src={run.ava}
                  size="xs"
                  className="hidden md:block"
                />
                <Typography
                  variant="small"
                  color="white"
                  className="font-[monospace] font-normal"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="flex-1 hidden md:block">
                <Typography
                  variant="small"
                  color="red"
                  className="text-center font-[monospace] font-normal"
                >
                  {run.quote}
                </Typography>
              </div>
              <div className="relative mx-auto flex-1 text-center">
                <Avatar
                  src={
                    `${run.name}` === "CapriceYuri"
                      ? `madeit.gif`
                      : `arms/${run.weapon}-${run.aspect}.png`
                  }
                  withBorder={true}
                  size="lg"
                />
                <Avatar
                  src={`rings/discord-${run.ring}.gif`}
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="lg"
                />
              </div>

              <div className="flex-1">
                <Typography
                  variant="small"
                  color="light-green"
                  className="text-center font-[monospace] font-semibold"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="text-center font-[monospace] font-normal"
                >
                  {run.weapon}
                </Typography>
              </div>

              <div className="flex-1">
                <Typography
                  variant="h4"
                  color="amber"
                  className="text-center font-[monospace] font-bold"
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
