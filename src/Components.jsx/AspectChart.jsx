import { Card, CardBody, Carousel } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { allData } from "../Data/DataLogic";

const WeaponData = allData.slice(4, 28);

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
    colors: ["#00FFFF"],
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
          colors: "#00FFFF",
          fontSize: "12px",
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: [
        "Achilles",
        "Arthur",
        "Beowulf",
        "Chaos",
        "Chiron",
        "Demter",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#00FFFF",
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
const chartConfig2 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[6].length,
        WeaponData[7].length,
        WeaponData[8].length,
        WeaponData[9].length,
        WeaponData[10].length,
        WeaponData[11].length,
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
    colors: ["#00FFFF"],
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
          colors: "#00FFFF",
          fontSize: "12px",
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Eris", "Gilga", "GuanYu", "Hades", "Hera", "Hestia"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#00FFFF",
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
const chartConfig3 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[12].length,
        WeaponData[13].length,
        WeaponData[14].length,
        WeaponData[15].length,
        WeaponData[16].length,
        WeaponData[17].length,
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
    colors: ["#00FFFF"],
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
          colors: "#00FFFF",
          fontSize: "12px",
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Lucifer", "Nemesis", "Poseidon", "Rama", "Talos", "Bow"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#00FFFF",
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
const chartConfig4 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[18].length,
        WeaponData[19].length,
        WeaponData[20].length,
        WeaponData[21].length,
        WeaponData[22].length,
        WeaponData[23].length,
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
    colors: ["#00FFFF"],
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
          colors: "#00FFFF",
          fontSize: "12px",
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Fists", "Rail", "Spear", "Shield", "Sword", "Zeus"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#00FFFF",
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

const allCharts = [chartConfig, chartConfig2, chartConfig3, chartConfig4];

export default function CategoryWeaponChart() {
  return (
    <Carousel loop={true}>
      {allCharts.map((chart) => (
        <Card className="bg-transparent" shadow={false}>
          <CardBody className="px-2 pb-4">
            <Chart {...chart} />
          </CardBody>
        </Card>
      ))}
    </Carousel>
  );
}
