import React from "react";
import styles from "../../../styles/Home.module.css";

const MortgageRate = () => {
  return (
    <div>
      <h2>Current Mortgage Rates for March 12, 2023</h2>
      <div className="row">
        <div className="col-md-12">
          <hr />
          <table className="table">
            <tbody>
              <tr>
                <td>Lender</td>
                <td>APR</td>
                <td>Rate</td>
                <td>Mo.Payment</td>
                <td>Sort By</td>
              </tr>
              <tr>
                <td>
                  <h1 className={styles.boldText}>Sage</h1>
                  <p className={styles.detailInfo}>30 year Fixed</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>7.00%</span>
                  <p className={styles.detailInfo}>Mar 12, 2023</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>7.00%</span>
                  <p className={styles.detailInfo}>Points 0</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>$4,631</span>
                  <p className={styles.detailInfo}>Fees $0</p>
                </td>
                <td className={styles.verticalAlign}>
                  <button className={"btn " + styles.btnNext}>
                    Next &#8594;
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className={styles.weslend}>
                    <span className={styles.wesText}>Wes</span>
                    <span className={styles.lendText}>Lend</span>
                  </h3>
                  <p className={styles.detailInfo + " text-justify"}>
                    FINANCIAL
                  </p>
                  <p className={styles.detailInfo}>30 year Fixed</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>6.51%</span>
                  <p className={styles.detailInfo}>Mar 12, 2023</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>6.38%</span>
                  <p className={styles.detailInfo}>Points 1125</p>
                </td>
                <td>
                  <span className={styles.percentBadge}>$4,342</span>
                  <p className={styles.detailInfo}>Fees $9,385</p>
                </td>
                <td className={styles.verticalAlign}>
                  <button className={"btn " + styles.btnNext}>
                    Next &#8594;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MortgageRate;
