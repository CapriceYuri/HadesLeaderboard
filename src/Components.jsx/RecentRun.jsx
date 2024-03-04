import {
  List,
  ListItem,
  Card,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { rawData } from "../Data/DataLogic";

const recent5 = rawData.slice(0, 5);

export default function RecentRuns() {
  return (
    <Card
      className="w-[100%] bg-transparent 2xl:w-4/5 border-4 border-black rounded-2xl shadow-[0_0_40px_black] mx-auto mb-5 relative"
      shadow={false}
    >
      <div className="absolute h-full w-full bg-black rounded-xl opacity-80 -z-10" />
      <List className="p-0">
        <div>
          <Typography
            variant="h3"
            color="white"
            className="font-customFont text-center"
          >
            Recent Submissions
          </Typography>
        </div>
        {recent5.map((run) => (
          <ListItem className="text-center">
            <div className="">
              <Spinner color="blue" />
            </div>
            <div className="flex-1 text-start ms-4">
              <Typography
                variant="h6"
                color={`white`}
                className="font-customFont"
              >
                {run.name}
              </Typography>
            </div>
            <div className="flex-1">
              <Typography
                variant="h6"
                color={`amber`}
                className="font-customFont"
              >
                {run.aspect}
              </Typography>
            </div>
            <div className="flex-1">
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
            <div className="flex-1">
              <Typography variant="h6" color="red" className="font-customFont">
                {run.note}
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
