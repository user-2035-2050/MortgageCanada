import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const data = {
    labels: ["2023", "2033", "2043", "2053"],
    datasets: [
      {
        label: "Principal & interest",
        data: [1033, 953, 885, 441],
        fill: false,
        backgroundColor: "#4949d0",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Property tax",
        data: [33, 625, 935, 851],
        fill: false,
        borderColor: "#66ff99"
      },
      {
        label: "Principal & interest",
        data: [10, 325, 735, 1151],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  
  export default function MySpline() {
    return (
        <Line data={data} redraw={true} />
    );
  }