const categories1 = ["Z-Sword", "Nemesis", "Poseidon", "Arthur"];
const categories2 = ["Z-Spear", "Achilles", "Hades", "Guan Yu"];
const categories3 = ["Z-Shield", "Chaos", "Zeus", "Beowulf"];
const categories4 = ["Z-Bow", "Chiron", "Hera", "Rama"];
const categories5 = ["Z-Fists", "Talos", "Demeter", "Gilgamesh"];
const categories6 = ["Z-Rail", "Eris", "Hestia", "Lucifer"];

import { Button } from "@material-tailwind/react";

export default function CategoryButtons({ onButtonClick }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6">
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories1.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 4).variant}
            color="blue"
            onClick={onButtonClick(index + 4).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories2.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 8).variant}
            color="amber"
            onClick={onButtonClick(index + 8).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories3.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 12).variant}
            color="lime"
            onClick={onButtonClick(index + 12).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories4.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 16).variant}
            color="red"
            onClick={onButtonClick(index + 16).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories5.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 20).variant}
            color="light-blue"
            onClick={onButtonClick(index + 20).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-2 p-2">
        {categories6.map((cate, index) => (
          <Button
            variant={onButtonClick(index + 24).variant}
            color="teal"
            onClick={onButtonClick(index + 24).onClick}
            className="p-3 w-[100px]"
            key={index}
          >
            {cate}
          </Button>
        ))}
      </div>
    </div>
  );
}
