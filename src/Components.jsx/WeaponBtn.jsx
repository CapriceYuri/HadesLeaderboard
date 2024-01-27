const weapons = ["Bow", "Fists", "Rail", "Spear", "Shield", "Sword"];

import { Button } from "@material-tailwind/react";

export default function CategoryWeapBtns({ onClick }) {
  return (
    <div className="grid grid-cols-4 place-items-center gap-2 p-4">
      {weapons.map((weapon, index) => (
        <Button
          onClick={() => onClick(index + 23)}
          color="deep-orange"
          className="text-black p-3 w-[100px]"
          key={index}
        >
          {weapon}
        </Button>
      ))}
    </div>
  );
}
