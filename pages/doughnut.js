import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import homeStyle from "../styles/Home.module.css";

Chart.register(ArcElement);
const labels = [
  "Principal & Interest",
  "Property Tax",
  "Homeowner's insurance",
  "PMI",
  "HOA fees"
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Monthly payment breakdown",
      data: [425000, 550000, 200000, 100000, 130000],
      backgroundColor: [
        "#4949d0",
        "#66ff99",
        "#4d94ff",
        "#ff66ff",
        "#5cd65c",
      ],
      borderColor: [
        "#008800",
        "#008800",
        "#880000",
        "#008800",
        "#008888",
        "#FF0000",
      ],
      borderWidth: 0,
      hoverBorderWidth: 0,
      hoverBorderColor: [
        "rgb(255, 99, 132)",
        "#006600",
        "#880000",
        "#008800",
        "#008888",
        "#FF0000",
      ],
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function MyDoughnut() {
  return (
    <div className={homeStyle.main}>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};
