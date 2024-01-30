const categories1 = ["Z-Sword", "Nemesis", "Poseidon", "Arthur"];
const categories2 = ["Z-Spear", "Achilles", "Hades", "Guan Yu"];
const categories3 = ["Z-Shield", "Chaos", "Zeus", "Beowulf"];
const categories4 = ["Z-Bow", "Chiron", "Hera", "Rama"];
const categories5 = ["Z-Fists", "Talos", "Demter", "Gilgamesh"];
const categories6 = ["Z-Rail", "Eris", "Hestia", "Lucifer"];

import { Button } from "@material-tailwind/react";

export default function CategoryButtons({ onClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories1.map((cate, index) => (
          <Button
            variant="outlined"
            color="blue"
            onClick={() => onClick(index + 4)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories2.map((cate, index) => (
          <Button
            variant="outlined"
            color="amber"
            onClick={() => onClick(index + 8)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories3.map((cate, index) => (
          <Button
            variant="outlined"
            color="lime"
            onClick={() => onClick(index + 12)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories4.map((cate, index) => (
          <Button
            variant="outlined"
            color="red"
            onClick={() => onClick(index + 16)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories5.map((cate, index) => (
          <Button
            variant="outlined"
            color="light-blue"
            onClick={() => onClick(index + 20)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories6.map((cate, index) => (
          <Button
            variant="outlined"
            color="teal"
            onClick={() => onClick(index + 24)}
            className="text-white border-2 p-3 w-[100px] hover:bg-white hover:text-black"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
    </div>
  );
}
