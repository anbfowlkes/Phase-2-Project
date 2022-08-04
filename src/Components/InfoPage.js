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

    const displayValues = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            //----'Income'----
            let e = 0
            return (
                <div>
                    <ol>
                        {prevIncome.map((item) => {
                            return (<IncomeShow
                                item={item}
                                key={e++}
                                id={item.id}
                                getIncome={getIncome}
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
                    <ol>
                        {prevInvestments.map((item) => {
                            return (<InvestmentsShow
                                    item={item}
                                    key={b++}
                                    id={item.id}
                                    getInvestments={getInvestments}
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
                    <ol>
                        {prevDebts.map((item) => {
                            return (
                                <DebtsShow 
                                item={item}
                                id={item.id}
                                key={c++}
                                getDebt={getDebt}
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
                    <p>{`Relationship Status:   ${taxSpecifics.relStatus}`}</p>
                    <p>{`Number of Dependents: ${taxSpecifics.dependents}`}</p>
                </div>
            )
        } else if (num === 5) {
            //----'Bills'----
            let d = 0
            return (
                <div>
                    <ol>
                        {prevBills.map((item) => {
                            return (
                                <BillsShow 
                                item={item}
                                id={item.id}
                                key={d++}
                                getBills={getBills}
                                 />
                            )
                        })}
                    </ol>
                </div>
            )
        }
    }
    
    return (
        <div>
            <h1>Welcome to the Information Page</h1>
            <div className='info-div'>
                {showItem(displayItem)}
            </div>
            <div className='current-status'>
                <h3>Current Information</h3>
                {displayValues(displayItem)}
            </div>

            <div className='info-buttons'>
                <button onClick={() => setDisplayItem(1)}>Enter your income information</button>
                <button onClick={() => setDisplayItem(2)}>Enter your investments information</button>
                <button onClick={() => setDisplayItem(3)}>Enter your debt information</button>
                <button onClick={() => setDisplayItem(4)}>Enter your tax information</button>
                <button onClick={() => setDisplayItem(5)}>Enter your bills</button>
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