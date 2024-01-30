const categories = [
  "Achilles",
  "Arthur",
  "Beowulf",
  "Chaos",
  "Chiron",
  "Demter",
  "Eris",
  "Gilgamesh",
  "Guan Yu",
  "Hades",
  "Hera",
  "Hestia",
  "Lucifer",
  "Nemesis",
  "Poseidon",
  "Rama",
  "Talos",
  "Z-Bow",
  "Z-Fists",
  "Z-Rail",
  "Z-Spear",
  "Z-Shield",
  "Z-Sword",

  "Zeus",
];

import { Button } from "@material-tailwind/react";

export default function CategoryButtons({ onClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 place-items-center gap-2 p-4">
      {categories.map((cate, index) => (
        <Button
          variant="outlined"
          onClick={() => onClick(index + 4)}
          className="text-white border-black border-2 p-3 w-[100px] hover:bg-white hover:text-black"
          key={index}
        >
          {cate}
        </Button>
      ))}
    </div>
  );
}
