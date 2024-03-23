import {
  List,
  ListItem,
  Card,
  Typography,
  Spinner,
  Avatar,
} from "@material-tailwind/react";
import { rawData } from "../Data/DataLogic";

const recent5 = rawData.slice(0, 5);

export default function RecentRuns() {
  return (
    <Card
      className="w-[100%] bg-transparent 2xl:w-4/5 border-4 border-black rounded-2xl shadow-[0_0_20px_white] mx-auto  relative"
      shadow={false}
    >
      <div className="absolute h-full w-full bg-[#28282b] -z-10 rounded-xl opacity-90" />
      <List className="p-0">
        <div>
          <Typography
            variant="h3"
            color="white"
            className="font-customFont text-center pt-5"
          >
            Latest Submissions
          </Typography>
        </div>
        {recent5.map((run, index) => (
          <ListItem
            className="text-center hover:bg-transparent focus:bg-[#28282B]"
            key={index}
          >
            <div>
              <Spinner color="blue" />
            </div>
            <div className="mx-2">
              <Avatar
                variant="rounded"
                color="indigo"
                src={run.ava}
                size="sm"
              />
            </div>
            <div className="flex-1 text-start">
              <Typography
                variant="h6"
                color={`white`}
                className="font-customFont"
              >
                {run.name}
              </Typography>
            </div>
            <div className="flex-1 text-center">
              <Typography
                variant="small"
                color={`white`}
                className="font-customFont"
              >
                {run.weapon}
              </Typography>
              <Typography
                variant="h6"
                color={`amber`}
                className="font-customFont"
              >
                {run.aspect}
              </Typography>
            </div>
            <div className="flex-1 text-center">
              <Typography
                variant="h6"
                color={
                  run.category === "Seeded"
                    ? "blue"
                    : run.category === "Modded"
                    ? "green"
                    : "orange"
                }
                className="font-customFont"
              >
                {run.heat}
              </Typography>
            </div>
            <div className="flex-1 hidden lg:block">
              <Typography
                color={`orange`}
                className="font-customFont text-[12px]"
              >
                {run.comment}
              </Typography>
            </div>
            <div className="flex-1">
              <Typography
                variant="h6"
                color={`white`}
                className="font-customFont"
              >
                {run.date}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
