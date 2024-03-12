import {
  List,
  ListItem,
  Avatar,
  Card,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

import CategoryButtons from "./Components.jsx/CategoryBtn";
import CategoryWeapBtns from "./Components.jsx/WeaponBtn";
import TotalRunsCard from "./Components.jsx/TotalRunsCard";
import TotalPlayerCard from "./Components.jsx/TotalPlayerCard";
import RunTypeBtn from "./Components.jsx/RunTypeBtn";
import CategoryWeaponChart from "./Components.jsx/WeaponChart";
import CategoryAspectChart from "./Components.jsx/AspectChart";
import RecordSummary from "./Components.jsx/RecordSummary";
import RecordSummaryCard from "./Components.jsx/RecordSummary2";
import { getAvatarRing, useAvatarBorder } from "./Data/FunctionLogic";
import FindPlayerBtn from "./Components.jsx/FindPlayerBtn";
import NavigationBar from "./Components.jsx/NavigationBar";
import PageFooter from "./Components.jsx/Footer";
import { addBoons } from "./Data/FunctionLogic";
import { haveComment } from "./Data/FunctionLogic";
import RecentRuns from "./Components.jsx/RecentRun";
import Timeline64 from "./Components.jsx/Timeline";

import { useState } from "react";
import { allData, BreakList, addRankProperty } from "./Data/DataLogic";

export default function MainContent() {
  const [category, setCategory] = useState(0);
  const [active, setActive] = useState(1);
  const [pageInfo, setPageInfo] = useState(0);

  // TESTING
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggleClick = () => {
    setShowComponentOne(!showComponentOne);
  };

  // TESTING
  const handleDataChange = (num) => ({
    variant: category === num ? "filled" : "outlined",
    onClick: () => {
      addRankProperty(allData[num]);
      setCategory(num);
      setPageInfo(0);
      setActive(1);
    },
  });
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
      <div className="fixed bg-[#000] h-lvh w-full object-cover -z-10" />
      <img
        src="Backgrounds/bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 lazy"
      />
      {/* COVER BG */}
      <NavigationBar />
      <section>
        <div className="flex justify-center px-2 mx-auto w-[100%] pt-10 pb-5 gap-x-2 2xl:w-4/5">
          <TotalRunsCard />
          <TotalPlayerCard />
        </div>
      </section>
      {/* CHARTS */}
      <section className="w-full flex justify-center pb-5">
        <Card className="w-[100%] bg-transparent shadow-[0_0_30px_white] 2xl:w-4/5 border-4 border-black rounded-2xl">
          <div className="absolute h-full w-full bg-[#28282b] rounded-xl opacity-80" />
          <List className="z-40">
            <div className="flex justify-center items-center">
              <Typography
                variant="h2"
                color="white"
                className="p-2 text-center font-customFont"
              >
                {"H.H.W.R."}
              </Typography>
              <img
                src="switch.gif"
                width={100}
                onClick={handleToggleClick}
                className="cursor-pointer"
              />
              <div>
                <Typography
                  variant="small"
                  color="white"
                  className="font-customFont text-center animate-bounce"
                >
                  (Click Me)
                </Typography>
              </div>
            </div>
            {showComponentOne ? <RecordSummary /> : <RecordSummaryCard />}
          </List>
        </Card>
      </section>
      <section className="my-5">
        <Timeline64 />
      </section>
      {/* TESTING */}
      {/* TESTING */}

      <section className="w-full flex justify-center pt-5">
        <Card className="w-[100%] bg-transparent shadow-[0_0_30px_white] 2xl:w-4/5 border-4 border-black rounded-2xl">
          {/* <img
            src="Backgrounds/recordBG.png"
            className="h-full w-full object-cover rounded-xl absolute"
          /> */}
          <div className="absolute h-full w-full bg-[#28282b] rounded-xl opacity-80" />
          <List className="z-40">
            <div>
              <Typography
                variant="h3"
                className="pt-2 text-center font-customFont text-[#E6E6FA]"
              >
                {"Weapon Stat Summary"}
              </Typography>
            </div>
            <CategoryWeaponChart />
            <CategoryAspectChart />
          </List>
        </Card>
      </section>
      {/* TABLE CONTENT */}
      <section>
        <RecentRuns />
      </section>
      <section className="w-full flex justify-center pb-10">
        <Card className="w-[100%] bg-transparent 2xl:w-4/5 border-4 border-black rounded-2xl shadow-[0_0_30px_white]">
          <div className="absolute h-full w-full bg-[#28282b] rounded-xl opacity-90" />
          <List className="z-40">
            <div>
              <Typography
                variant="h2"
                color="white"
                className="p-2 text-center font-customFont"
              >
                {"Heat Leaderboard"}
              </Typography>
            </div>
            <RunTypeBtn onButtonClick={handleDataChange} />
            <CategoryWeapBtns onButtonClick={handleDataChange} />
            <CategoryButtons onButtonClick={handleDataChange} />
            <FindPlayerBtn onButtonClick={handleDataChange} />
            {sortDisplay.map((player, index) => (
              <div>
                <ListItem
                  className="hover:bg-transparent focus:bg-black relative py-6 cursor-default"
                  key={index}
                >
                  <div>
                    <Typography
                      variant="h6"
                      color="white"
                      className="font-customFont"
                    >
                      {`#${player.rank}.`}
                    </Typography>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col items-center">
                      <Avatar
                        variant="rounded"
                        color="indigo"
                        src={player.ava}
                        size="sm"
                      />
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {player.name}
                      </Typography>
                    </div>
                  </div>

                  <div className="flex-1 text-center hidden md:block">
                    <div className="relative mx-auto">
                      <Avatar
                        src={`arms/${player.weapon}-${player.aspect}.png`}
                      />
                      <Avatar
                        src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        withBorder={true}
                        color={useAvatarBorder(player.aspect)}
                        variant="rounded"
                        className="rotate-45 absolute top-0 start-50 transform -translate-x-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center">
                    <Typography
                      variant="h6"
                      color="amber"
                      className="font-customFont"
                    >
                      {`${player.aspect}`}
                    </Typography>
                    <Typography
                      variant="small"
                      color="white"
                      className="font-customFont"
                    >
                      {`${player.weapon}`}
                    </Typography>
                  </div>

                  <div className="flex-1">
                    <div className="relative mx-auto text-center">
                      <Avatar
                        src={
                          player.special !== undefined
                            ? `special/${player.special}.png`
                            : `gods/${player.aspect}.png`
                        }
                        withBorder={true}
                        className="p-0.5"
                      />
                      <Avatar
                        src={getAvatarRing(player.aspect)}
                        className="absolute top-0 start-50 transform -translate-x-full"
                      />
                    </div>
                  </div>

                  {addBoons(player.playerBoon, player.boonlevel)}

                  <div className="flex-1 text-center">
                    <Typography
                      variant="small"
                      color="white"
                      className="font-normal"
                    ></Typography>
                    <Typography
                      variant="h6"
                      color={
                        player.category === "Seeded"
                          ? "blue"
                          : player.category === "Modded"
                          ? "green"
                          : "orange"
                      }
                    >
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
                      className="font-semibold font-customFont"
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
                        color="yellow"
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
                {haveComment(player.comment)}
              </div>
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
      <PageFooter />
    </section>
  );
}
