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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Sword", "Nemesis", "Poseidon", "Arthur"],
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
const chartConfig2 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[4].length,
        WeaponData[5].length,
        WeaponData[6].length,
        WeaponData[7].length,
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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Spear", "Achilles", "Hades", "Guan Yu"],
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
const chartConfig3 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Shield", "Chaos", "Zeus", "Beowulf"],
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
const chartConfig4 = {
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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Bow", "Chiron", "Hera", "Rama"],
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
const chartConfig5 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
        WeaponData[16].length,
        WeaponData[17].length,
        WeaponData[18].length,
        WeaponData[19].length,
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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Fists", "Talos", "Demeter", "Gilgamesh"],
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
const chartConfig6 = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Runs",
      data: [
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
          fontFamily: "monospace",
          fontWeight: 400,
        },
      },
      categories: ["Zagreus-Rail", "Eris", "Hestia", "Lucifer"],
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

const allCharts = [
  chartConfig,
  chartConfig2,
  chartConfig3,
  chartConfig4,
  chartConfig5,
  chartConfig6,
];

export default function CategoryWeaponChart() {
  return (
    <Carousel loop={true}>
      {allCharts.map((chart) => (
        <Card className="bg-transparent" shadow={false}>
          <CardBody className="px-10 pb-4">
            <Chart {...chart} />
          </CardBody>
        </Card>
      ))}
    </Carousel>
  );
}
