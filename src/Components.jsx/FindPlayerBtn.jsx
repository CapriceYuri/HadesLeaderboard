import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { FullData } from "../Data/ImportData";
import { allData } from "../Data/DataLogic";

const RunTypes = ["Search"];

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
    <div className="py-8">
      <div className=" w-[500px] flex mx-auto gap-x-2 items-center">
        <Button
          variant="outlined"
          color="white"
          onClick={() => {
            onButtonClick(0).onClick();
            setInputValue("");
          }}
        >
          Reset
        </Button>
        <Input
          type="text"
          color="white"
          label="Name"
          value={inputValue}
          onChange={handleInputChange}
        />

        {RunTypes.map((num, index) => (
          <Button
            key={index}
            variant={onButtonClick(index + 34).variant}
            onClick={onButtonClick(index + 34).onClick}
            color="white"
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
}
