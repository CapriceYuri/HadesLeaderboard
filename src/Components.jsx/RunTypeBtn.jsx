import { Button } from "@material-tailwind/react";

const RunTypes = ["All", "Modded", "Unseeded", "Seeded"];

export default function RunTypeBtn({ onClick }) {
  return (
    <div className="flex justify-center gap-2 p-4">
      {RunTypes.map((types, index) => (
        <Button
          key={index}
          variant="outlined"
          onClick={() => onClick(index + 0)}
          color="red"
          className="text-white border-2 p-3 w-[100px] hover:bg-red-600 hover:text-black"
        >
          {types}
        </Button>
      ))}
    </div>
  );
}
