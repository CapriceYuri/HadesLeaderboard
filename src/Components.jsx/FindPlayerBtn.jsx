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
      <div className=" w-[400px] mx-auto">
        <Input
          type="text"
          color="white"
          label="Name"
          value={inputValue}
          onChange={handleInputChange}
          className="order-1"
        />
        <div className="flex justify-between mt-2">
          <Button
            className="col-span-1"
            variant="gradient"
            color="white"
            onClick={() => {
              onButtonClick(0).onClick();
              setInputValue("");
            }}
          >
            Reset
          </Button>
          {RunTypes.map((num, index) => (
            <Button
              key={index}
              variant={onButtonClick(index + 34).variant}
              onClick={onButtonClick(index + 34).onClick}
              color="white"
              className="order-3"
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
