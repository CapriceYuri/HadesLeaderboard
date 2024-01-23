import {
  List,
  ListItem,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

import { TestingData } from "./Data/TestUnits";

export default function MainContent() {
  return (
    <section className="h-full">
      <img
        src="bg-img.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10"
      />
      {/* COVER BG */}
      <section className="w-full flex justify-center py-24">
        <Card className="w-[95%] max-w-[1200px] backdrop-blur-lg bg-transparent shadow-[0_0_50px_red]">
          <img
            src="bg-table.png"
            className="h-full w-full object-cover rounded-2xl absolute"
          />
          <div
            className="absolute h-full w-full bg-gradient-to-t from-purple-800 to-purple-800
         via-indigo-300 rounded-xl opacity-70"
          />
          <List className="z-40">
            {TestingData.map((player) => (
              <ListItem className="hover:bg-black focus:bg-black">
                <div className="flex-1">
                  <div className="flex flex-col items-center">
                    <Avatar
                      variant="rounded"
                      color="pink"
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
                    {`God`}
                  </Typography>
                  <Typography variant="h3" color="yellow">
                    {`${player.god}`}
                  </Typography>
                </div>
                <div className="flex-1 text-center">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    {`Arm`}
                  </Typography>
                  <Typography variant="h3" color="pink">
                    {`${player.item}`}
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
                <div className="flex justify-center">
                  <a href={player.src} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="red"
                      className="w-6 h-6 z-10"
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

            {/* DIVIDE */}
          </List>
        </Card>
      </section>
    </section>
  );
}
