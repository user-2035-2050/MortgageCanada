import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";

const HomePrice = (props) => {

  const [homeState, setHomeState] = useState(props.homeState);
  const downPriceData = [
    {value: 5, label: "5%"},
    {value: 10, label: "10%"},
    {value: 15, label: "15%"},
    {value: 20, label: "20%"},
    {value: 25, label: "25%"},
    {value: 30, label: "30%"}
  ]
  const yearData = [
    {value: 5, label: "5 Year"},
    {value: 10, label: "10 Year"},
    {value: 15, label: "15 Year"},
    {value: 20, label: "20 Year"},
    {value: 25, label: "25 Year"},
    {value: 30, label: "30 Year"}
  ]

  const handleChange = (e) => {
    setHomeState({...homeState, [e.target.name]: parseFloat(e.target.value)})
  };

  useEffect(() => {
    props.homeStateChange(homeState);
  }, [homeState, props])

  return (
    <div>
      <p className={styles.label}>Home Price($)</p>
      <input
        type={`number`}
        min={0}
        placeholder={`425000`}
        value={homeState && homeState.homePrice}
        className={`form-control ` + styles.dollar}
        onChange={handleChange}
        name="homePrice"
      />
      <p className={styles.label}>Down Payment(%)</p>
      <select
        className={`form-control`}
        name="downPrice"
        defaultValue={homeState && homeState.downPrice}
        onChange={handleChange}
      >
        {downPriceData.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
      </select>
      <p className={styles.label}>Loan Term</p>
      <select
        className={`form-control`}
        defaultValue={homeState && homeState.year}
        name="year"
        onChange={handleChange}
      >
        {yearData.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
      </select>
      <p className={styles.label}>Interest Rate(%)</p>
      <input
        type={`number`}
        min={0}
        placeholder={`5`}
        max={100}
        className={`form-control`}
        value={homeState && homeState.rate}
        name="rate"
        onChange={handleChange}
      />
    </div>
  );
};

export default HomePrice;
