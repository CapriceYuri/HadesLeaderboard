import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { allData } from "../Data/DataLogic";

const recordData = allData.slice(4, 28);
let TopPlayerCategory = [];

function findTopPlayer(arr) {
  let highestHeat = arr[0].heat;
  TopPlayerCategory.push(arr.filter((run) => run.heat === highestHeat));
}
recordData.forEach((arr) => findTopPlayer(arr));

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
                <Avatar variant="rounded" src={run.ava} size="xs" />
                <Typography
                  variant="small"
                  color="white"
                  className="font-[monospace] font-normal"
                >
                  {run.name}
                </Typography>
              </div>
              <div className="flex-1">
                <Typography
                  variant="small"
                  color="light-green"
                  className="text-center font-[monospace] font-normal"
                >
                  {run.weapon}
                </Typography>
              </div>
              <div className="relative mx-auto">
                <Avatar
                  src={`arms/${run.weapon}-${run.aspect}.png`}
                  withBorder={true}
                  size="lg"
                />
                <Avatar
                  src={`rings/discord-${run.ring}.gif`}
                  className="absolute top-0 start-0"
                  size="lg"
                />
              </div>
              <div className="flex-1">
                <Typography
                  variant="small"
                  color="light-green"
                  className="text-center font-[monospace] font-normal"
                >
                  {run.aspect}
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
