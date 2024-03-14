import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Card,
} from "@material-tailwind/react";

import { timelineData } from "../Data/TimelineData";

export default function Timeline64() {
  return (
    <Card className="bg-transparent border-4 border-black w-full 2xl:w-4/5 mx-auto relative rounded-2xl">
      <div className="absolute h-full w-full bg-[#28282b] -z-10 rounded-xl opacity-80" />

      <div>
        <div className="text-center">
          <Typography
            color="white"
            variant="h2"
            className="font-customFont pt-4"
          >
            Timeline 64
          </Typography>
        </div>
        <Timeline className="p-10">
          {timelineData.map((obj, index) => (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-1">
                  <Avatar src={`/${obj.ava}`} alt={obj.person} withBorder />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="white"
                  className="font-customFont"
                >
                  {obj.title}
                </Typography>
                <TimelineIcon className="shadow-[0_0_15px_white] p-0 bg-transparent">
                  <Avatar
                    size="sm"
                    src={`arms/${obj.weapon}-${obj.aspect}.png`}
                    alt={`Weapon`}
                  />
                </TimelineIcon>
              </TimelineHeader>
              <TimelineBody className="pb-6">
                <Typography
                  color="orange"
                  className="font-customFont text-[14px] md:text-[16px]"
                >
                  {obj.info}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))}
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-1">
                <Avatar src="hammer.png" withBorder />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="white"
                className="font-customFont"
              >
                {`Next...`}
              </Typography>
            </TimelineHeader>
          </TimelineItem>
        </Timeline>
      </div>
    </Card>
  );
}
