import {
  List,
  ListItem,
  Avatar,
  Card,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import { useState } from "react";
import { allData } from "./Data/DataLogic";
import { totalPages, totalRuns, uniquePlayers } from "./Data/DataLogic";

export default function MainContent() {
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(allData[0]);

  const getList = (index) => ({
    variant: active === index ? "gradient" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      setPageInfo(allData[index - 1]);
    },
  });
  return (
    <section className="h-lvh">
      <img
        src="Backgrounds/bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10"
      />
      {/* COVER BG */}
      <section>
        <div className="grid grid-cols-2 mx-auto w-[100%] pt-10 px-4 gap-x-2">
          <Card
            className="w-[100%] h-56 mx-auto bg-transparent shadow-[0_0_30px_yellow] relative"
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
          <Card
            className="w-[100%] h-56 mx-auto bg-transparent shadow-[0_0_30px_yellow] relative"
            shadow={false}
          >
            <img
              src="Backgrounds/playerbg.png"
              className="h-full w-full object-cover rounded-2xl absolute"
            />
            <div className="absolute h-full w-full bg-gradient-to-l to-purple-900 from-red-400 opacity-60 rounded-xl" />

            <div className="z-50 flex flex-col h-full justify-center items-center mx-auto">
              <Typography variant="h4" color="white">
                {`Unique Players`}
              </Typography>
              <Typography
                variant="h1"
                color="amber"
                className="font-bold"
                children={uniquePlayers}
              ></Typography>
            </div>
          </Card>
        </div>
      </section>
      {/* TABLE CONTENT */}
      <section className="w-full flex justify-center pt-5 pb-10 2xl:px-36">
        <Card className="w-[95%] max-w-[1200px] backdrop-blur-lg bg-transparent shadow-[0_0_50px_red]">
          <img
            src="Backgrounds/bg-table.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-bl from-black to-red-400 rounded-xl opacity-70" />
          <List className="z-40">
            <div>
              <Typography variant="h2" color="red" className="p-2 text-center">
                {"Heat Leaderboard"}
              </Typography>
            </div>
            {pageInfo.map((player, index) => (
              <ListItem className="hover:bg-black focus:bg-black" key={index}>
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <Avatar
                      variant="rounded"
                      color="indigo"
                      src={player.ava}
                      withBorder={true}
                      className="p-0.5"
                    />
                    <Typography variant="h6" color="white">
                      {player.name}
                    </Typography>
                  </div>
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {`Aspect`}
                  </Typography>
                  <Typography variant="h5" color="pink">
                    {`${player.aspect}`}
                  </Typography>
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {`Weapon`}
                  </Typography>
                  <Typography variant="h5" color="orange">
                    {`${player.weapon}`}
                  </Typography>
                </div>

                <div className="flex-1 text-center">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {`Heat`}
                  </Typography>
                  <Typography variant="h3" color="deep-orange">
                    {`${player.heat}`}
                  </Typography>
                </div>
                <div className="flex-1 text-center hidden md:block">
                  <Typography
                    variant="h6"
                    color={
                      player.category === "Seeded"
                        ? "blue"
                        : player.category === "Modded"
                        ? "green"
                        : "orange"
                    }
                    className="font-normal"
                  >
                    {player.category}
                  </Typography>
                </div>
                <div className="flex justify-center">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="red"
                      className="w-6 h-6 z-10 animate-bounce"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </ListItem>
            ))}
          </List>
          <CardFooter>
            <div>
              <div className="grid grid-cols-10">
                {totalPages.map((page, index) => (
                  <IconButton {...getList(page)} key={index}>
                    {page}
                  </IconButton>
                ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
