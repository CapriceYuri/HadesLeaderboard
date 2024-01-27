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
  "Zagreus",
  "Zeus",
];

import { Button } from "@material-tailwind/react";

export default function CategoryButtons({ onClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-2 p-4">
      {categories.map((cate, index) => (
        <Button
          onClick={() => onClick(index + 4)}
          color="amber"
          className="text-black p-3 w-[100px]"
          key={index}
        >
          {cate}
        </Button>
      ))}
    </div>
  );
}
