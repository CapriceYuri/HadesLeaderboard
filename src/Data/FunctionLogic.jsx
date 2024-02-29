import { Avatar, Tooltip, Typography } from "@material-tailwind/react";

export const getAvatarRing = (aspect) => {
  switch (aspect) {
    case "Beowulf":
      return "rings/discord-red.gif";
    case "Hera":
      return "rings/discord-purple.gif";
    case "Achilles":
      return "rings/discord-yellow.gif";
    case "Eris":
      return "rings/discord-darkblue.gif";
    case "Hestia":
      return "rings/discord-pink.gif";
    case "Rama":
      return "rings/discord-blue.gif";
    case "Nemesis":
      return "rings/discord-blue.gif";
    case "Demeter":
      return "rings/discord-green.gif";
    case "Lucifer":
      return "rings/discord-yellow.gif";
    case "Gilgamesh":
      return "rings/discord-pink.gif";
    case "Chaos":
      return "rings/discord-purple.gif";
    case "Guan Yu":
      return "rings/discord-red.gif";
    case "Chiron":
      return "rings/discord-yellow.gif";
    case "Poseidon":
      return "rings/discord-green.gif";
    case "Talos":
      return "rings/discord-purple.gif";
    case "Hades":
      return "rings/discord-pink.gif";
    case "Arthur":
      return "rings/discord-blue.gif";
    case "Zeus":
      return "rings/discord-yellow.gif";
    default:
      return "rings/discord-green.gif";
  }
};

export const getAvatarBorder = (aspect) => {
  switch (aspect) {
    case "Beowulf":
      return "border/red.png";
    case "Hera":
      return "border/purple.png";
    case "Achilles":
      return "border/yellow.png";
    case "Eris":
      return "border/blue.png";
    case "Hestia":
      return "border/pink.png";
    case "Rama":
      return "border/blue.png";
    case "Nemesis":
      return "border/cyan.png";
    case "Demeter":
      return "border/green.png";
    case "Lucifer":
      return "border/yellow.png";
    case "Gilgamesh":
      return "border/pink.png";
    case "Chaos":
      return "border/purple.png";
    case "Guan Yu":
      return "border/red.png";
    case "Chiron":
      return "border/yellow.png";
    case "Poseidon":
      return "border/green.png";
    case "Talos":
      return "border/purple.png";
    case "Hades":
      return "border/pink.png";
    case "Arthur":
      return "border/blue.png";
    case "Zeus":
      return "border/yellow.png";
    default:
      return "border/green.png";
  }
};

export const useAvatarBorder = (aspect) => {
  switch (aspect) {
    case "Beowulf":
      return "red";
    case "Hera":
      return "purple";
    case "Achilles":
      return "yellow";
    case "Eris":
      return "blue";
    case "Hestia":
      return "pink";
    case "Rama":
      return "blue";
    case "Nemesis":
      return "cyan";
    case "Demeter":
      return "light-green";
    case "Lucifer":
      return "yellow";
    case "Gilgamesh":
      return "pink";
    case "Chaos":
      return "purple";
    case "Guan Yu":
      return "deep-orange";
    case "Chiron":
      return "yellow";
    case "Poseidon":
      return "green";
    case "Talos":
      return "purple";
    case "Hades":
      return "pink";
    case "Arthur":
      return "blue";
    case "Zeus":
      return "yellow";
    default:
      return "teal";
  }
};

// Function for Boon

export function addBoons(playerBoon, boonLevel) {
  function check0(playerBoon) {
    if (playerBoon[0] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block">
          <Tooltip content={playerBoon[0]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[0]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[0]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }
  function check1(playerBoon) {
    if (playerBoon[1] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block transform -translate-x-[13px] -translate-y-[35px]">
          <Tooltip content={playerBoon[1]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[1]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[1]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }
  function check2(playerBoon) {
    if (playerBoon[2] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block transform -translate-x-[26px]">
          <Tooltip content={playerBoon[2]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[2]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[2]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }
  function check3(playerBoon) {
    if (playerBoon[3] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block transform -translate-x-[39px] -translate-y-[35px]">
          <Tooltip content={playerBoon[3]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[3]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[3]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }
  function check4(playerBoon) {
    if (playerBoon[4] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block transform -translate-x-[52px]">
          <Tooltip content={playerBoon[4]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[4]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[4]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }
  function check5(playerBoon) {
    if (playerBoon[5] !== undefined) {
      return (
        <div className="flex-1 text-center hidden md:block transform -translate-x-[65px] -translate-y-[35px]">
          <Tooltip content={playerBoon[5]} className="bg-black font-customFont">
            <div className="relative mx-auto">
              <Avatar src={`/testing/${playerBoon[5]}.png`} />
              <Avatar
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                withBorder={true}
                color={boonLevel[5]}
                variant="rounded"
                className="rotate-45 absolute top-0 start-50 transform -translate-x-full cursor-default border-[3px]"
              />
            </div>
          </Tooltip>
        </div>
      );
    }
  }

  if (playerBoon !== undefined) {
    return (
      <div className="flex translate-y-4 translate-x-4">
        {check0(playerBoon)}
        {check1(playerBoon)}
        {check2(playerBoon)}
        {check3(playerBoon)}
        {check4(playerBoon)}
        {check5(playerBoon)}
      </div>
    );
  }
}
// Testing Comment Function
export function haveComment(comment) {
  if (comment !== undefined) {
    return (
      <div className="transform -translate-y-[40%] pl-4">
        <Typography
          color="orange"
          className="font-customFont text-[14px]"
        >{`"${comment}"`}</Typography>
      </div>
    );
  }
}
