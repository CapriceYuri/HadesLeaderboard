const weapons = ["Sword", "Spear", "Shield", "Bow", "Fists", "Rail"];

import { Button } from "@material-tailwind/react";

export default function CategoryWeapBtns({ onButtonClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 place-items-center gap-2 p-4">
      {weapons.map((weapon, index) => (
        <Button
          variant={onButtonClick(index + 28).variant}
          onClick={onButtonClick(index + 28).onClick}
          color="white"
          className="p-3 w-[100px] "
          key={index}
        >
          {weapon}
        </Button>
      ))}
    </div>
  );
}
