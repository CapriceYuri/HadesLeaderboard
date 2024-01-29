import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { allData } from "../Data/DataLogic";

const WeaponData = allData.slice(28);
console.log(WeaponData.length);
const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[0].length,
        WeaponData[1].length,
        WeaponData[2].length,
        WeaponData[3].length,
        WeaponData[4].length,
        WeaponData[5].length,
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF6347"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#FF6347",
          fontSize: "12px",
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Bow", "Fists", "Rail", "Spear", "Shield", "Sword"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#FF6347",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function CategoryWeaponChart() {
  return (
    <Card className="bg-transparent">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="2xl:text-center 2xl:mx-auto">
          <Typography variant="h5" color="amber">
            Infernal Arms
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="max-w-sm font-normal"
          >
            Concise visual representation of the distribution of runs based on
            different weapons, offering insights into the effectiveness and
            prevalence of each weapon in the given context.
          </Typography>
        </div>
        <div className="2xl:text-center 2xl:mx-auto">
          <Typography variant="h5" className="text-[#00FFFF]">
            Aspects
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="max-w-sm font-normal"
          >
            Like a forged blade tempered in the fires of adversity, a strong
            weapon is not only a tool of power but a testament to resilience,
            capable of cutting through the challenges that stand in its way.
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
