const weapons = ["Bow", "Fists", "Rail", "Spear", "Shield", "Sword"];

import { Button } from "@material-tailwind/react";

export default function CategoryWeapBtns({ onClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 place-items-center gap-2 p-4">
      {weapons.map((weapon, index) => (
        <Button
          variant="outlined"
          onClick={() => onClick(index + 28)}
          className="text-orange-600 border-orange-600 border-2 p-3 w-[100px] hover:bg-orange-500 hover:text-black"
          key={index}
        >
          {weapon}
        </Button>
      ))}
    </div>
  );
}
