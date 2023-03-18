import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";

const MonthlyPayment = (props) => {
  const [paymentState, setPaymentState] = useState(props.paymentState)

  const handleChange = (e) => {
    setPaymentState({...paymentState, [e.target.name]:parseFloat(e.target.value)})
  };

  useEffect(() => {
    props.paymentStateChange(paymentState);
    props.setTotal(props.principal + paymentState.insurance + paymentState.pmi + paymentState.foa + paymentState.tax + props.interest)
  }, [paymentState, props]);

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circlePrincipalMark}></span>
                Principal
              </p>
            </td>
            <td width={20}></td>
            <td className={styles.secondColumn}>
              <p className={styles.boldText}>${props.principal && props.principal.toFixed(0)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circleInterestMark}></span>
                Interest
              </p>
            </td>
            <td width={20}></td>
            <td className={styles.secondColumn}>
              <p className={styles.boldText}>${props.interest && props.interest.toFixed(0)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circleTaxMark}></span>Property tax
              </p>
            </td>
            <td width={20}>
              <span className={styles.Operator}>+</span>
            </td>
            <td>
              <input
                type={`number`}
                min={0}
                placeholder={0.0}
                className={`form-control`}
                name="tax"
                value={paymentState && paymentState.tax}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circleInsuranceMark}></span>
                Homeowner&#39;s insurance
              </p>
            </td>
            <td width={20}>
              <span className={styles.Operator}>+</span>
            </td>
            <td>
              <input
                type={`number`}
                min={0}
                placeholder={0.0}
                className={`form-control`}
                name="insurance"
                value={paymentState && paymentState.insurance}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circlePMIMark}></span>PMI
              </p>
            </td>
            <td width={20}>
              <span className={styles.Operator}>+</span>
            </td>
            <td>
              <input
                type={`number`}
                min={0}
                placeholder={0.0}
                className={`form-control`}
                name="pmi"
                value={paymentState && paymentState.pmi}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label}>
                <span className={styles.circleHOAMark}></span>HOA fees
              </p>
            </td>
            <td width={20}>
              <span className={styles.Operator}>+</span>
            </td>
            <td>
              <input
                type={`number`}
                min={0}
                placeholder={0.0}
                className={`form-control`}
                name="foa"
                value={paymentState && paymentState.foa}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="col-md-8">
          <p className={styles.boldText}>Total monthly payment</p>
        </div>
        <div className={"col-md-4 " + styles.rightText}>
          <p className={styles.boldText}>${props.total && props.total.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPayment;
