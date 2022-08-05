import { useState, useEffect } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DebtInfo from './Info/DebtInfo'
import BillsInfo from './Info/BillsInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'
import InvestmentsShow from './InfoDisplays/InvestmentsShow'
import DebtsShow from './InfoDisplays/DebtsShow'
import BillsShow from './InfoDisplays/BillsShow'
import IncomeShow from './InfoDisplays/IncomeShow'
import './Styles/InfoPage.css'


const InfoPage = ({ 
    
     } ) => {


    const [prevIncome, setPrevIncome] = useState([])
    const [prevTaxes, setPrevTaxes] = useState({})
    const [prevDebts, setPrevDebts] = useState([])
    const [prevInvestments, setPrevInvestments] = useState([])
    const [prevBills, setPrevBills] = useState([])

    
    

    const getIncome = () => {
        fetch('http://localhost:8000/income')
            .then((res) => res.json())
            .then((data) => setPrevIncome(data))
    }
    useEffect(() => {
        getIncome()
    }, [])

    const getInvestments = () => {
        fetch('http://localhost:8000/investments')
            .then((res) => res.json())
            .then((data) => setPrevInvestments(data))
    }
    useEffect(() => {
        getInvestments()
    }, [])

    const getDebt = () => {
        fetch('http://localhost:8000/debt')
            .then((res) => res.json())
            .then((data) => setPrevDebts(data))
    }
    useEffect(() => {
        getDebt()
    }, [])

    const getTaxes = () => {
        fetch('http://localhost:8000/taxes')
            .then((res) => res.json())
            .then((data) => setPrevTaxes(data))
    }
    useEffect(() => {
        getTaxes()
    }, [])

    const getBills = () => {
        fetch('http://localhost:8000/bills')
            .then((res) => res.json())
            .then((data) => setPrevBills(data))
    }
    useEffect(() => {
        getBills()
    }, [])

    const [displayItem, setDisplayItem] = useState(0)
    
    const showItem = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            //----'Income'----
            return <IncomeInfo 
                getIncome={getIncome}
            />
        } else if (num === 2) {
            //----'Investments'----
            return <InvestmentsInfo 
                getInvestments={getInvestments}
            />
        } else if (num === 3) {
            //----'Debt'----
            return <DebtInfo 
                getDebt={getDebt}
            />
        } else if (num === 4) {
            //----'Taxes'----
            return <TaxInfo 
                setPrevTaxes={setPrevTaxes}
            />
        } else if (num === 5) {
            //----'Bills'----
            return <BillsInfo
               getBills={getBills}
                />
        }
    }

    const numDisplayer = (number) => {
        if (Math.floor(number) != number) {
            let x = number.toString()
            let numArr = x.split('')
            let len = numArr.length
            for (let pos = numArr.length - 4; pos > 0; pos--) {
                if ((len - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            return numWithCommas
        } else if (Math.floor(number) == number) {
            let x = number.toString()
            let numArr = x.split('')
            let len = numArr.length
            for (let pos = numArr.length; pos > 0; pos--) {
                if ((len - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            numWithCommas = numWithCommas + '.00'
            return numWithCommas
        }
    }

    const displayValues = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            //----'Income'----
            let e = 0
            return (
                <div>
                    <h3>Current Information</h3>
                    <ol>
                        {prevIncome.map((item) => {
                            return (<IncomeShow
                                item={item}
                                key={e++}
                                id={item.id}
                                getIncome={getIncome}
                                numDisplayer={numDisplayer}
                            />)
                        })}
                    </ol>
                </div>
            )
        } else if (num === 2) {
            //----'Investments'----
            let b = 0
            return (
                <div>
                    <h3>Current Information</h3>
                    <ol>
                        {prevInvestments.map((item) => {
                            return (<InvestmentsShow
                                    item={item}
                                    key={b++}
                                    id={item.id}
                                    getInvestments={getInvestments}
                                    numDisplayer={numDisplayer}
                                         />)
                        })}
                    </ol>
                </div>
            )
        } else if (num === 3) {
            //----'Debt'----
            let c = 0
            return (
                <div>
                    <h3>Current Information</h3>
                    <ol>
                        {prevDebts.map((item) => {
                            return (
                                <DebtsShow 
                                item={item}
                                id={item.id}
                                key={c++}
                                getDebt={getDebt}
                                numDisplayer={numDisplayer}
                                 />
                            )
                        })}
                    </ol>
                </div>
            )
        } else if (num === 4) {
            //----'Taxes'----
            let taxSpecifics = prevTaxes
            console.log('Tax Information: ', taxSpecifics)
            return (
                <div>
                    <h3>Current Information</h3>
                    <p>{'Relationship Status: '}<u>{`${taxSpecifics.relStatus}`}</u></p>
                    <p>{'Number of Dependents: '}<u>{`${taxSpecifics.dependents}`}</u></p>
                </div>
            )
        } else if (num === 5) {
            //----'Bills'----
            let d = 0
            return (
                <div>
                    <h3>Current Information</h3>
                    <ol>
                        {prevBills.map((item) => {
                            return (
                                <BillsShow 
                                item={item}
                                id={item.id}
                                key={d++}
                                getBills={getBills}
                                numDisplayer={numDisplayer}
                                 />
                            )
                        })}
                    </ol>
                </div>
            )
        }
    }
    
    return (
        <div id='actually-all-info'>
            <h1 id='title'>Information Page</h1>
            <div className='all-info'>

                <div className='info-buttons'>
                    <button id='button1' className='info-buttons' onClick={() => setDisplayItem(1)}>Enter your Income Information</button>
                    <button id='button2' className='info-buttons' onClick={() => setDisplayItem(2)}>Enter your Investments Information</button>
                    <button id='button3' className='info-buttons' onClick={() => setDisplayItem(3)}>Enter your Debt Information</button>
                    <button id='button4' className='info-buttons' onClick={() => setDisplayItem(4)}>Enter your Tax Information</button>
                    <button id='button5' className='info-buttons' onClick={() => setDisplayItem(5)}>Enter your Bills Information</button>
                </div>
            
                <div className='main-section'>

                    <div className='info-div'>
                        {showItem(displayItem)}
                    </div>

                    <div style={{width: '700px'}} className='info-show'>
                        <div className='current-status'>
                            {displayValues(displayItem)}
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default InfoPage





 // useEffect(() => {
            //     const fetchData = async () => {
            //         let req = await fetch('http://localhost:8000/income')
            //         let res = await req.json()
            //         console.log(res)
            //         setInfo(res)
            //         console.log(info)
            //     }
            //     fetchData()
            // }, [] )