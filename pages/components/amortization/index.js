import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const Amortization = (props) => {
  const [homeState, setHomeState] = useState({});
  const [lfdata, setLFData] = useState([]);
  const [lsdata, setLSData] = useState([]);
  const [ltdata, setLTData] = useState([]);  
  const [yearsLabel, setYearsLabel] = useState([2023, 2031, 2039, 2048]);

  const linedata = {
    type: "spline",
    labels: yearsLabel,
    datasets: [
      {
        label: "Principal paid",
        data: lfdata,
        fill: false,
        backgroundColor: "#4949d0",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Interest Paid",
        data: lsdata,
        fill: false,
        borderColor: "#66ff99",
      },
      {
        label: "Loan Balance",
        data: ltdata,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  useEffect(() => {
    setHomeState(props.homeState);
  }, [props]);

  useEffect(() => {
    let temp = (homeState.homePrice * (100 - homeState.downPrice)) / 100;
    setLFData([0, temp * 0.2, temp * 0.5, temp * 1.05]);
    setLSData([0, temp * 0.5, temp * 0.8, temp * 0.96]);
    setLTData([temp, temp * 0.8, temp * 0.45, 0]);
  }, [homeState]);

  useEffect(() => {
    let today = new Date();
    let cy = today.getFullYear();
    let step = parseFloat(homeState.year / 3);
    setYearsLabel([
      cy,
      parseInt(cy + step - 1),
      parseInt(cy + 2 * step - 2),
      cy + homeState.year,
    ]);
  }, [homeState.year]);

  return (
    <div>
      <p className={styles.tab}>Amortization</p>
      <Line
        data={linedata}
        options={{
          plugins: {
            legend: {
              display: false,
              labels: {
                padding: 20,
              },
            },
          },
        }}
        redraw={true}
      />
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td></td>
            <td className={styles.rightText}>
              <p>As of April 2026</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>Principal paid</p>
            </td>
            <td className={styles.rightText}>
              <p className={styles.label}>
                ${(homeState.homePrice * (100 - homeState.downPrice)) / 100 / homeState.year * (2026-2023)}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>Interest paid</p>
            </td>
            <td className={styles.rightText}>
              <p className={styles.label}>${(props.paid * 12 * (2026-2023)).toFixed(0)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>Loan balance</p>
            </td>
            <td className={styles.rightText}>
              <p className={styles.label}>
                $
                {(homeState.homePrice * (100 - homeState.downPrice)) / 100 -
                  (homeState.homePrice * (100 - homeState.downPrice)) / 100 / homeState.year * (2026-2023)}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Amortization;
