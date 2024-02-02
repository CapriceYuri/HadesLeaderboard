import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

import { allData } from "../Data/DataLogic";
import { getAvatarRing } from "../Data/FunctionLogic";

const recordData = allData.slice(4, 28);
let TopPlayerCategory = [];
// Filter Function
function findTopPlayer(arr) {
  let highestHeat = arr[0].heat;
  TopPlayerCategory.push(arr.filter((run) => run.heat === highestHeat));
}
function removeDup(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}
// Execute Filtering
recordData.forEach((arr) => findTopPlayer(arr));

for (let i = 0; i < TopPlayerCategory.length; i++) {
  TopPlayerCategory[i] = removeDup(TopPlayerCategory[i], "ava");
}

export default function RecordSummaryCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 pt-4">
      {TopPlayerCategory.map((arr) =>
        arr.map((run, index) => (
          <Card
            className={`bg-[url('/cardBG/card2.png')] bg-cover border-2 border-white px-4 py-8`}
            key={index}
          >
            <div className="text-center relative">
              <Avatar
                variant="circular"
                withBorder={true}
                className="p-2"
                src={run.ava}
                size="xl"
              />
              <Avatar
                src={`rings/black.gif`}
                className="absolute top-0 start-50 transform -translate-x-full"
                size="xl"
              />
            </div>

            <CardBody className="p-2">
              <div className="text-center">
                <Typography
                  variant="h5"
                  color="white"
                  className="mx-auto backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.name}
                </Typography>
              </div>

              <div className="relative mx-auto text-center">
                <Avatar
                  src={
                    `${run.name}` === "CapriceYuri"
                      ? `madeit.gif`
                      : `arms/${run.weapon}-${run.aspect}.png`
                  }
                  withBorder={true}
                  size="lg"
                />
                <Avatar
                  src={getAvatarRing(run.aspect)}
                  className="absolute top-0 start-50 transform -translate-x-full"
                  size="lg"
                />
              </div>

              <div className="flex justify-evenly items-center py-2">
                <Typography
                  variant="h4"
                  color="white"
                  className="text-center backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.aspect}
                </Typography>
                <Typography
                  variant="h3"
                  color="pink"
                  className="text-center backdrop-blur-md inline-block rounded-md font-customFont"
                >
                  {run.heat}
                </Typography>
              </div>

              <div>
                <img
                  src={`actual-arms/${run.aspect}-${run.weapon}.png`}
                  className="rounded-2xl mx-auto shadow-[0_0_20px_pink]"
                  width={200}
                />
              </div>
            </CardBody>
          </Card>
        ))
      )}
      {/* TESTING */}
      {/* <Card className="bg-transparent backdrop-blur-sm">
        <CardHeader floated={false}>
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="white" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography variant="small" color="white">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
      </Card> */}
    </div>
  );
}
