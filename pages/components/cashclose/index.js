import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";

const CashClose = (props) => {
  const [house, setHouse] = useState(false);
  const [lawyerFee, setLawyerFee] = useState(0);
  const [titleInsurance, setTitleInsurance] = useState(0);
  const [homeInspection, setHomeInspection] = useState(0);
  const [appraisalFee, setAppraisalFee] = useState(0);
  const [estoppelFee, setEstoppelFee] = useState(0);
  const [cash, setCash] = useState(0);
  const [downPaymentOption, setDownPaymentOption] = useState(5);
  const handleChange = (e) => {
    let locVal = parseFloat(e.target.value)
    if (e.target.name === "downPaymentOption") {
      setDownPaymentOption(locVal);
    }
    if (e.target.name === "lawyerFee") {
      setLawyerFee(locVal);
    }
    if (e.target.name === "titleInsurance") {
      setTitleInsurance(locVal);
    }
    if (e.target.name === "homeInspection") {
      setHomeInspection(locVal);
    }
    if (e.target.name === "appraisalFee") {
      setAppraisalFee(locVal);
    }
    if (e.target.name === "estoppelFee") {
      setEstoppelFee(locVal);
    }
  };

  const downPaymentData = [
    {value: 5, label: "Scenario1 (5% down)"},
    {value: 10, label: "Scenario2 (10% down)"},
    {value: 15, label: "Scenario3 (15% down)"},
    {value: 20, label: "Scenario4 (20% down)"}
  ]

  const handleCondoClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.previousElementSibling.style.backgroundColor =
      "rgb(255, 255, 255)";
    setHouse(false);
  };

  const handleHouseClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.nextElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    setHouse(true);
  };

  useEffect(() => {
    setCash(
      lawyerFee +
        titleInsurance +
        homeInspection +
        appraisalFee +
        (!house ? estoppelFee : 0) +
        (props.homeState.homePrice * downPaymentOption) / 100 +
        props.landTransferTax +
        props.mortgageInsurance
    );
  }, [
    appraisalFee,
    downPaymentOption,
    estoppelFee,
    homeInspection,
    house,
    lawyerFee,
    titleInsurance,
    props,
  ]);

  return (
    <div className="row">
      <div className={"col-md-12 card " + styles.card}>
        <p>Cash needed to close</p>
        <hr />
        <div className="row">
          <div
            className={
              "col-md-4 " + styles.rightBorderBox + " " + styles.marginBottom20
            }
          >
            <p className={styles.cashText}>
              When you purchase a house, there are a number of costs you will
              need to put aside in addition to your down payment.
            </p>
            <p
              className={
                styles.cashLabel +
                " " +
                styles.marginBottom20 +
                " " +
                styles.paddingLeftRight20
              }
            >
              Down payment options
            </p>
            <select
              className={
                `form-control ` +
                styles.marginBottom20 +
                " " +
                styles.marginLeftRight20
              }
              name="downPaymentOption"
              defaultValue={5}
              onChange={handleChange}
            >
              {downPaymentData.map((item, index) => <option value={item.value} key={index}>{item.label}</option>)}
            </select>
            <p
              className={
                styles.cashLabel +
                " " +
                styles.marginBottom20 +
                " " +
                styles.paddingLeftRight20
              }
            >
              Type of house
            </p>
            <button className={styles.btnYes} onClick={handleHouseClick}>
              House
            </button>
            <button className={styles.btnNo} onClick={handleCondoClick}>
              Condo
            </button>
          </div>
          <div className="col-md-8">
            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Provincial($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <h5 className={styles.dottedLabel}>
                  ${(downPaymentOption * props.homeState.homePrice) / 100}
                </h5>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Land transfer tax($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <h5 className={styles.dottedLabel}>${props.landTransferTax}</h5>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>
                  PST on mortgage insurance($)
                </h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <h5 className={styles.dottedLabel}>
                  ${props.mortgageInsurance}
                </h5>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Lawyer fees($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <input
                  type={"number"}
                  name="lawyerFee"
                  className={"form-control"}
                  value={lawyerFee}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Title insurance($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <input
                  type={"number"}
                  name="titleInsurance"
                  className={"form-control"}
                  value={titleInsurance}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Home inspection($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <input
                  type={"number"}
                  name="homeInspection"
                  className={"form-control"}
                  value={homeInspection}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={"row"}>
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Appraisal fees($)</h5>
                <hr className={styles.dottedLine + " " + styles.w100} />
              </div>
              <div className="col-md-3">
                <input
                  type={"number"}
                  name="appraisalFee"
                  className={"form-control"}
                  value={appraisalFee}
                  onChange={handleChange}
                />
              </div>
            </div>
            {!house ? (
              <div className={"row"}>
                <div className={"col-md-9 " + styles.flexDiv}>
                  <h5 className={styles.dottedLabel}>Estoppel fee($)</h5>
                  <hr className={styles.dottedLine + " " + styles.w100} />
                </div>
                <div className="col-md-3">
                  <input
                    type={"number"}
                    name="estoppelFee"
                    className={"form-control"}
                    value={estoppelFee}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="row">
              <div className={"col-md-9 " + styles.flexDiv}>
                <h5 className={styles.dottedLabel}>Cash needed to close</h5>
              </div>
              <div className="col-md-3">
                <h5 className={styles.dottedLabel + " " + styles.cash}>
                  ${cash}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CashClose;
