import { Card, Typography } from "@material-tailwind/react";
import { totalRuns } from "../Data/DataLogic";

export default function TotalRunsCard() {
  return (
    <Card
      className="w-[100%] h-56 bg-transparent shadow-[0_0_50px_red] relative"
      shadow={false}
    >
      <img
        src="Backgrounds/runbg.png"
        className="h-full w-full object-cover rounded-2xl absolute"
      />
      <div className="absolute h-full w-full bg-gradient-to-r from-purple-900 to-red-400 opacity-60 rounded-xl" />
      <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
        <Typography variant="h4" color="white">
          {`Total Runs`}
        </Typography>
        <Typography
          variant="h1"
          color="amber"
          className="font-bold"
          children={totalRuns}
        ></Typography>
      </div>
    </Card>
  );
}
