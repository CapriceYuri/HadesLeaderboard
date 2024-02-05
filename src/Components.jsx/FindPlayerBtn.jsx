import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { FullData } from "../Data/ImportData";
import { allData } from "../Data/DataLogic";

const RunTypes = ["Find Player"];

export default function FindPlayerBtn({ onButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const findPlayer = FullData.filter(
    (run) => run.name.toLowerCase() === inputValue.toLowerCase()
  );
  allData[34] = findPlayer;

  return (
    <div className="flex justify-center gap-2 p-4">
      <div className="w-72">
        <Input
          type="text"
          color="white"
          label="Name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-start">
          <Button
            onClick={() => {
              onButtonClick(0).onClick();
              setInputValue("");
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      {RunTypes.map((num, index) => (
        <Button
          key={index}
          variant={onButtonClick(index + 34).variant}
          onClick={onButtonClick(index + 34).onClick}
          color="white"
          className="p-3 w-[100px]"
        >
          {num}
        </Button>
      ))}
    </div>
  );
}
