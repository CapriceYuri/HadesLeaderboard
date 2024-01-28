import {
  List,
  ListItem,
  Avatar,
  Card,
  CardFooter,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

import CategoryButtons from "./Components.jsx/CategoryBtn";
import CategoryWeapBtns from "./Components.jsx/WeaponBtn";

import { useState } from "react";
import { totalRuns, uniquePlayers, allData, BreakList } from "./Data/DataLogic";

export default function MainContent() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  function handleDataChange(num) {
    setCategory(num);
    setPageInfo(0);
    setActive(1);
  }
  function handleChangePage(arr) {
    setPageInfo(arr);
  }

  let dataDisplay = allData[category];
  const { eachPages, totalPages } = BreakList(dataDisplay);

  let sortDisplay = eachPages[pageInfo];

  const getList = (index) => ({
    variant: active === index ? "gradient" : "text",
    color: "white",
    onClick: () => {
      setActive(index);
      handleChangePage(index - 1);
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
        <div className="flex justify-center px-4 mx-auto w-[100%] pt-10 gap-x-2">
          <Card
            className="w-[100%] h-56 max-w-[600px] bg-transparent shadow-[0_0_30px_yellow] relative"
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
            className="w-[100%] h-56 max-w-[600px] flex bg-transparent shadow-[0_0_30px_yellow] relative"
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
            src="Backgrounds/vertical.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div className="absolute h-full w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-800 rounded-xl opacity-40" />
          <List className="z-40">
            <div>
              <Typography variant="h2" color="red" className="p-2 text-center">
                {"Heat Leaderboard"}
              </Typography>
            </div>
            <div className="flex justify-center gap-2 p-4">
              <Button
                onClick={() => handleDataChange(0)}
                color="red"
                className="text-black p-3 w-[100px]"
              >
                ALL
              </Button>
              <Button
                onClick={() => handleDataChange(1)}
                color="green"
                className="text-black p-3 w-[100px]"
              >
                MODDED
              </Button>
              <Button
                onClick={() => handleDataChange(2)}
                color="orange"
                className="text-black p-3 w-[100px]"
              >
                Unseeded
              </Button>
              <Button
                onClick={() => handleDataChange(3)}
                color="blue"
                className="text-black p-3 w-[100px]"
              >
                Seeded
              </Button>
            </div>
            <CategoryButtons onClick={handleDataChange} />
            <CategoryWeapBtns onClick={handleDataChange} />
            {sortDisplay.map((player, index) => (
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
                <div>
                  <div className="relative mx-auto">
                    <Avatar
                      src={`arms/${player.weapon}-${player.aspect}.png`}
                      withBorder={true}
                    />
                    <Avatar
                      src={`rings/discord-${player.ring}.gif`}
                      className="absolute top-0 start-0"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative mx-auto ms-2">
                    <Avatar src={`gods/${player.god}.png`} withBorder={true} />
                    <Avatar
                      src={`rings/discord-${player.ring}.gif`}
                      className="absolute top-0 start-0"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center align-top hidden sm:block">
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
                  <Typography variant="h5" color="deep-orange">
                    {`${player.heat}`}
                  </Typography>
                </div>
                <div className="flex-1 text-center hidden sm:block">
                  <Typography
                    variant="h6"
                    color={
                      player.category === "Seeded"
                        ? "blue"
                        : player.category === "Modded"
                        ? "green"
                        : "orange"
                    }
                    className="font-semibold"
                  >
                    {player.category}
                  </Typography>
                </div>
                <div className="flex-0 mx-2 text-center sm:hidden">
                  <Typography
                    variant="h4"
                    color={
                      player.category === "Seeded"
                        ? "blue"
                        : player.category === "Modded"
                        ? "green"
                        : "orange"
                    }
                    className="font-bold"
                  >
                    {player.category === "Seeded"
                      ? "S"
                      : player.category === "Modded"
                      ? "M"
                      : "U"}
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
