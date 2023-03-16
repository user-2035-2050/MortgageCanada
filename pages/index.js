import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Line, Doughnut } from "react-chartjs-2"
import { Chart } from 'chart.js/auto'
import { useEffect, useState } from "react"

export default function Home() {
  const [homePrice, setHomePrice] = useState(425000);
  const [downPrice, setDownPrice] = useState(20);
  const [year, setYear] = useState(25);
  const [rate, setRate] = useState(5);
  const [principal, setPrincipal] = useState(0);
  const [tax, setTax] = useState(280);
  const [total, setTotal] = useState(0);
  const [insurance, setInsurance] = useState(66);
  const [interest, setInterest] = useState(0);
  const [pmi, setPMI] = useState(0);
  const [foa, setFOA] = useState(0);
  const [ddata, setDData] = useState([]);
  const [lfdata, setLFData] = useState([]);
  const [lsdata, setLSData] = useState([]);
  const [ltdata, setLTData] = useState([]);
  const [downPaymentOption, setDownPaymentOption] = useState(5);
  const [lawyerFee, setLawyerFee] = useState(0);
  const [titleInsurance, setTitleInsurance] = useState(0);
  const [homeInspection, setHomeInspection] = useState(0);
  const [appraisalFee, setAppraisalFee] = useState(0);
  const [estoppelFee, setEstoppelFee] = useState(0);
  const [cash, setCash] = useState(0);
  const [landTransferTax, setLandTransferTax] = useState(0);
  const [mortgageInsurance, setMortgageInsurance] = useState(0);
  const [house, setHouse] = useState(false);
  const [condo, setCondo] = useState(true);
  const [newbie, setNewbieHome] = useState(false);
  const [oldbie, setOldbieHome] = useState(true);
  const [paid, setPaid] = useState(1537);
  const [yearsLabel, setYearsLabel] = useState([2023,2031,2039,2048]);
  const [municipal, setMunicipal] = useState(0);
  const [rebate, setRebate] = useState(0);
  const handleChange = async (e) => {
    let locVal = parseFloat(e.target.value);
    if(e.target.name === "homePrice"){
      setHomePrice(locVal)
    }
    if(e.target.name === "downPrice"){
      setDownPrice(locVal)
    }    
    if(e.target.name === "rate"){
      setRate(locVal)
    }
    if(e.target.name === "year"){
      setYear(locVal)
    }
    if(e.target.name === "tax"){
      setTax(locVal)
    }
    if(e.target.name === "foa"){
      setFOA(locVal)
    }
    if(e.target.name === "pmi"){
      setPMI(locVal)
    }
    if(e.target.name === "interest"){
      setInterest(locVal)
    }
    if(e.target.name === "insurance"){
      setInsurance(locVal)
    }
    if(e.target.name === "downPaymentOption"){
      setDownPaymentOption(locVal)
    }
    if(e.target.name === "lawyerFee"){
      setLawyerFee(locVal)
    }
    if(e.target.name === "titleInsurance"){
      setTitleInsurance(locVal)
    }
    if(e.target.name === "homeInspection"){
      setHomeInspection(locVal)
    }
    if(e.target.name === "appraisalFee"){
      setAppraisalFee(locVal)
    }
    if(e.target.name === "estoppelFee"){
      setEstoppelFee(locVal)
    }
  }

  const handleCondoClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.previousElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    setHouse(false)
    setCondo(true)
  }

  const handleHouseClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.nextElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    setHouse(true)
    setCondo(false)
  }
  
  const handleNoClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.previousElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    setNewbieHome(false)
    setOldbieHome(true)
  }

  const handleYesClick = (e) => {
    e.target.style.backgroundColor = "rgb(221, 248, 248)";
    e.target.nextElementSibling.style.backgroundColor = "rgb(255, 255, 255)";
    setNewbieHome(true)
    setOldbieHome(false)
  }

  useEffect(() => {
    setTotal(principal + foa + pmi + tax + insurance);
    setDData([principal, tax, insurance, pmi, foa]);
  }, [foa, pmi, principal, tax, insurance])

  useEffect(() => {    
    let P = homePrice * ( 100 - downPrice ) / 100;
    let r = rate / 12 / 100;
    let n = year * 12;
    let M = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n)- 1);
    setPrincipal(parseInt(M));
    setInterest(parseInt((M * 12 * year - homePrice)/year/12));
    let temp = homePrice * (100 - downPrice) / 100;
    setLFData([0, temp*0.2, temp*0.5, temp * 1.05]);
    setLSData([0, temp*0.5, temp*0.8, temp * 0.96]);
    setLTData([temp, temp*0.8, temp*0.45, 0]);
  }, [downPrice, homePrice, rate, year]);

  useEffect(() => {
    setCash(lawyerFee + titleInsurance + homeInspection + appraisalFee + (!house?estoppelFee:0) + homePrice * downPaymentOption / 100 + landTransferTax + mortgageInsurance);
  }, [appraisalFee, downPaymentOption, estoppelFee, homeInspection, homePrice, house, landTransferTax, lawyerFee, mortgageInsurance, titleInsurance])

  useEffect(() => {    
    let today = new Date();
    let cy = today.getFullYear();
    let step = parseFloat(year/3);
    setYearsLabel([cy,parseInt(cy+step-1),parseInt(cy+2*step-2),cy+year])
  }, [year])

  useEffect(() => {
    setLandTransferTax(homePrice * downPrice / 100 + municipal - rebate)
  }, [downPrice, homePrice, municipal, rebate])

  useEffect(() => {
    setMunicipal(homePrice * downPrice / 100)
  }, [downPrice, homePrice])

  useEffect(() => {
    let localRate = 0;
    if(homePrice <= 100000){
      localRate = 0;
    }else if(homePrice <= 500000){
      localRate = 0.05;
    }else{
      localRate = 0.75;
    }
    let val = newbie ? (homePrice * downPrice / 100 * localRate * 2) : (homePrice * downPrice / 100 * (1 - localRate) * 2);
    setRebate(parseInt(val));
  }, [downPrice, homePrice, newbie])

  const labels = [
    "Principal & Interest",
    "Property Tax",
    "Homeowner's insurance",
    "PMI",
    "HOA fees"
  ];
  const doughnutdata = {
    labels: labels,
    datasets: [
      {
        label: "Monthly payment breakdown",
        data: ddata,
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
  const linedata = {
    type: "spline",
    labels: yearsLabel,
    datasets: [
      {
        label: "Principal paid",
        data: lfdata,
        fill: false,
        backgroundColor: "#4949d0",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Interest Paid",
        data: lsdata,
        fill: false,
        borderColor: "#66ff99"
      },
      {
        label: "Loan Balance",
        data: ltdata,
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"container " + styles.main}>
        <div className={styles.header}>
          <h1>Mortgage Calculator</h1>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <p className={styles.label}>Home Price($)</p>
            <input type={`number`} min={0} placeholder={`425000`} value={homePrice} className={`form-control ` + styles.dollar} onChange={handleChange} name="homePrice" />
            <p className={styles.label}>Down Payment(%)</p>
            <select className={`form-control`} name="downPrice" defaultValue={downPrice} onChange={handleChange}>
              <option value={5}>5 %</option>
              <option value={10}>10 %</option>
              <option value={15}>15 %</option>
              <option value={20}>20 %</option>
              <option value={25}>25 %</option>
              <option value={30}>30 %</option>
            </select>
            <p className={styles.label}>Loan Term</p>
            <select className={`form-control`} defaultValue={year} name="year" onChange={handleChange}>
              <option value={5}>5 Years</option>
              <option value={10}>10 Years</option>
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
              <option value={30}>30 Years</option>
            </select>
            <p className={styles.label}>Interest Rate(%)</p>
            <input type={`number`} min={0} placeholder={`5`} max={100} className={`form-control`} value={rate} name="rate" onChange={handleChange} />
            <p className={styles.tab}>Amortization</p>
            <Line 
              data={linedata}
              options={{
                plugins: {
                  legend: {
                    display: false,
                    labels: {
                      padding: 20
                    },
                  },
                }}
              } 
              redraw={true} 
            />
            <br />
            <table className='table'>
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
                    <p className={styles.label}>${homePrice * (100 - downPrice) / 100}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.label}>Interest paid</p>
                  </td>
                  <td className={styles.rightText}>
                    <p className={styles.label}>${paid}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={styles.label}>Loan balance</p>
                  </td>
                  <td className={styles.rightText}>
                    <p className={styles.label}>${homePrice * (100 - downPrice) / 100 - paid}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-md-8'>
            <p className={styles.tab}>Payment Breakdown</p>
            <h2>Monthly Payment Breakdown</h2>
            <div className={`row`}>
              <div className={'col-md-6 text-center '+styles.relativeDiv}>
                <br />
              <Doughnut
                data={doughnutdata}
                options={{
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      display: false,
                      labels: {
                        padding: 20
                      },
                    },
                  },
                }}
              />
              <span className={styles.totalFee}>${total}</span>
              </div>
              <div className='col-md-6'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circlePrincipalMark}></span>Principal & interest</p>
                      </td>
                      <td width={20}></td>
                      <td className={styles.secondColumn}>
                        <p className={styles.boldText}>${principal}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circleInterestMark}></span>Interest</p>
                      </td>
                      <td width={20}></td>
                      <td className={styles.secondColumn}>
                        <p className={styles.boldText}>${interest}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circleTaxMark}></span>Property tax</p>
                      </td>
                      <td width={20}><span className={styles.Operator}>+</span></td>
                      <td>
                        <input type={`number`} min={0} placeholder={0.00} className={`form-control`} name="tax" value={tax} onChange={handleChange} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circleInsuranceMark}></span>Homeowner&#39;s insurance</p>
                      </td>
                      <td width={20}><span className={styles.Operator}>+</span></td>
                      <td>
                        <input type={`number`} min={0} placeholder={0.00} className={`form-control`} name="insurance" value={insurance} onChange={handleChange} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circlePMIMark}></span>PMI</p>
                      </td>
                      <td width={20}><span className={styles.Operator}>+</span></td>
                      <td>
                        <input type={`number`} min={0} placeholder={0.00} className={`form-control`} name="pmi" value={pmi} onChange={handleChange} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className={styles.label}><span className={styles.circleHOAMark}></span>HOA fees</p>
                      </td>
                      <td width={20}><span className={styles.Operator}>+</span></td>
                      <td>
                        <input type={`number`} min={0} placeholder={0.00} className={`form-control`} name="foa" value={foa} onChange={handleChange} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className='row'>
                  <div className='col-md-8'>
                    <p className={styles.boldText}>Total monthly payment</p>
                  </div>
                  <div className={'col-md-4 ' + styles.rightText}>
                    <p className={styles.boldText}>${total}</p>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
            <h2>Current Mortgage Rates for March 12, 2023</h2>
            <div className='row'>
              <div className='col-md-12'>
                <hr />
                <table className='table'>
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
                        <button className={'btn ' + styles.btnNext}>Next &#8594;</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className={styles.weslend}><span className={styles.wesText}>Wes</span><span className={styles.lendText}>Lend</span></h3>
                        <p className={styles.detailInfo + ' text-justify'}>FINANCIAL</p>
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
                        <button className={'btn ' + styles.btnNext}>Next &#8594;</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className={'col-md-4 ' + styles.rightBorderBox}>
            <h3 className={styles.boldText}>Are you a first time home buyer?</h3>
            <button className={styles.btnYes} onClick={handleYesClick}>Yes</button>
            <button className={styles.btnNo} onClick={handleNoClick}>No</button>
          </div>
          <div className={'col-md-8'}>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className={'col-md-2'}><h5 className={styles.dottedLabel}>Provincial</h5></div>
              <div className='col-md-7'><hr className={styles.dottedLine} /></div>
              <div className='col-md-2'><h5 className={styles.dottedLabel}>${municipal}</h5></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className={'col-md-2'}><h5 className={styles.dottedLabel}>Municipal</h5></div>
              <div className='col-md-7'><hr className={styles.dottedLine} /></div>
              <div className='col-md-2'><h5 className={styles.dottedLabel}>${municipal}</h5></div>
            </div>
            <div className='row'>
              <div className='col-md-1'></div>
              <div className={'col-md-2'}><h5 className={styles.dottedLabel}>Rebate</h5></div>
              <div className='col-md-7'><hr className={styles.dottedLine} /></div>
              <div className='col-md-2'><h5 className={styles.dottedLabel}>${rebate}</h5></div>
            </div>
            <div className='row'>
              <div className={'col-md-3'}><h5 className={styles.dottedLabel +" "+ styles.boldText}>Land transfer tax</h5></div>
              <div className='col-md-7'><hr className={styles.dottedLine} /></div>
              <div className='col-md-2'><h5 className={styles.dottedLabel}>${landTransferTax}</h5></div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className={'col-md-12 card ' + styles.card}>
            <p>Cash needed to close</p>
            <hr />
            <div className='row'>
              <div className={'col-md-4 ' + styles.rightBorderBox + " " + styles.marginBottom20}>
                <p className={styles.cashText}>When you purchase a house, there are a number of costs you will need to put aside in addition to your down payment.</p>
                <p className={styles.cashLabel + " " + styles.marginBottom20 + " " + styles.paddingLeftRight20}>Down payment options</p>
                <select className={`form-control ` + styles.marginBottom20 + " " + styles.marginLeftRight20} name="downPaymentOption" defaultValue={5} onChange={handleChange}>
                  <option value={5}>Scenario1 (5% down)</option>
                  <option value={10}>Scenario2 (10% down)</option>
                  <option value={15}>Scenario3 (15% down)</option>
                  <option value={20}>Scenario4 (20% down)</option>
                </select>
                <p className={styles.cashLabel + " " + styles.marginBottom20 + " " + styles.paddingLeftRight20}>Type of house</p>
                <button className={styles.btnYes} onClick={handleHouseClick}>House</button>
                <button className={styles.btnNo} onClick={handleCondoClick}>Condo</button>
              </div>
              <div className='col-md-8'>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Provincial($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'><h5 className={styles.dottedLabel}>${downPaymentOption * homePrice / 100}</h5></div>
                </div>

                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Land transfer tax($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'><h5 className={styles.dottedLabel}>${landTransferTax}</h5></div>
                </div>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>PST on mortgage insurance($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'><h5 className={styles.dottedLabel}>${mortgageInsurance}</h5></div>
                </div>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Lawyer fees($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'>
                    <input type={'number'} name="lawyerFee" className={'form-control'} value={lawyerFee} onChange={handleChange} />
                  </div>
                </div>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Title insurance($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'>
                    <input type={'number'}  name="titleInsurance" className={'form-control'} value={titleInsurance} onChange={handleChange} />
                  </div>
                </div>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Home inspection($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'>
                    <input type={'number'} name="homeInspection" className={'form-control'} value={homeInspection} onChange={handleChange} />
                  </div>
                </div>
                
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Appraisal fees($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'>
                    <input type={'number'} name="appraisalFee" className={'form-control'} value={appraisalFee} onChange={handleChange} />
                  </div>
                </div>
                {
                !house
                ?
                <div className={'row'}>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Estoppel fee($)</h5>
                    <hr className={styles.dottedLine + ' ' + styles.w100} />
                  </div>
                  <div className='col-md-3'>
                    <input type={'number'} name="estoppelFee" className={'form-control'} value={estoppelFee} onChange={handleChange} />
                  </div>
                </div>
                :
                <></>
                }
                
                <div className='row'>
                  <div className={'col-md-9 ' + styles.flexDiv}>
                    <h5 className={styles.dottedLabel}>Cash needed to close</h5>
                  </div>
                  <div className='col-md-3'><h5 className={styles.dottedLabel + " " + styles.cash}>${cash}</h5></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <p className='text-center'>Mortgage Calculator @ 2023</p>
      <br />
    </>
  )
}
