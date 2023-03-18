import React from "react";
import styles from "../../../styles/Home.module.css";
const HomeBuyer = (props) => {

  const handleNoClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.previousElementSibling.style.backgroundColor =
      "rgb(255, 255, 255)";
    props.setNewbieHome(false);
  };

  const handleYesClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.nextElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    props.setNewbieHome(true);
  };

  return (
    <div className="row">
      <div className={"col-md-4 " + styles.rightBorderBox}>
        <h3 className={styles.boldText}>Are you a first time home buyer?</h3>
        <button className={styles.btnYes} onClick={handleYesClick}>
          Yes
        </button>
        <button className={styles.btnNo} onClick={handleNoClick}>
          No
        </button>
      </div>
      <div className={"col-md-8"}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className={"col-md-2"}>
            <h5 className={styles.dottedLabel}>Provincial</h5>
          </div>
          <div className="col-md-7">
            <hr className={styles.dottedLine} />
          </div>
          <div className="col-md-2">
            <h5 className={styles.dottedLabel}>${props.municipal}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className={"col-md-2"}>
            <h5 className={styles.dottedLabel}>Municipal</h5>
          </div>
          <div className="col-md-7">
            <hr className={styles.dottedLine} />
          </div>
          <div className="col-md-2">
            <h5 className={styles.dottedLabel}>${props.municipal}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className={"col-md-2"}>
            <h5 className={styles.dottedLabel}>Rebate</h5>
          </div>
          <div className="col-md-7">
            <hr className={styles.dottedLine} />
          </div>
          <div className="col-md-2">
            <h5 className={styles.dottedLabel}>${props.rebate}</h5>
          </div>
        </div>
        <div className="row">
          <div className={"col-md-3"}>
            <h5 className={styles.dottedLabel + " " + styles.boldText}>
              Land transfer tax
            </h5>
          </div>
          <div className="col-md-7">
            <hr className={styles.dottedLine} />
          </div>
          <div className="col-md-2">
            <h5 className={styles.dottedLabel}>${props.landTransferTax}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBuyer;
