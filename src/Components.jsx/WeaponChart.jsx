import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { allData } from "../Data/DataLogic";

const WeaponData = allData.slice(28);
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
    colors: ["#E6E6FA"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 8,
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
          colors: "#E6E6FA",
          fontSize: "12px",
          fontFamily: "customFont",
          fontWeight: 400,
        },
      },
      categories: ["Sword", "Spear", "Shield", "Bow", "Fists", "Rail"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#E6E6FA",
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
    <Card className="bg-transparent" shadow={false}>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
