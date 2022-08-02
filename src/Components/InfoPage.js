import { useState, useEffect } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DailyExpInfo from './Info/DailyExpInfo'
import DebtInfo from './Info/DebtInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'
import CurrentShow from './InfoDisplays/CurrentShow'


const InfoPage = ({ 
    newSpending,
    setNewSpending,
    prevSpending,
    setPrevSpending,
    newIncome,
    prevIncome,
    setPrevIncome,
    setNewIncome,
    newTaxes,
    setNewTaxes,
    prevTaxes,
    setPrevTaxes,
    newDebts,
    setNewDebts,
    prevDebts,
    setPrevDebts,
    newInvestments,
    setNewInvestments,
    prevInvestments,
    setPrevInvestments,
    newTotals,
    setNewTotals,
    prevTotals,
    setPrevTotals
     } ) => {

    const [displayItem, setDisplayItem] = useState(0)
    let cat = ''

    const showItem = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            cat = 'Daily'
            return <DailyExpInfo 
                newSpending={newSpending}
                setNewSpending={setNewSpending}
                prevSpending={prevSpending}
                setPrevSpending={setPrevSpending}
            />
        } else if (num === 2) {
            cat = 'income'
            return <IncomeInfo 
                newIncome={newIncome}
                setNewIncome={setNewIncome}
                prevIncome={prevIncome}
                setPrevIncome={setPrevIncome}
            />
        } else if (num === 3) {
            cat = 'investments'
            return <InvestmentsInfo 
                newInvestments={newInvestments}
                setNewInvestments={setNewInvestments}
                prevInvestments={prevInvestments}
                setPrevInvestments={setPrevInvestments}
            />
        } else if (num === 4) {
            cat = 'debt'
            return <DebtInfo 
                newDebts={newDebts}
                setNewDebts={setNewDebts}
                prevDebts={prevDebts}
                setPrevDebts={setPrevDebts}
            />
        } else if (num === 5) {
            cat = 'taxes'
            return <TaxInfo 
                newTaxes={newTaxes}
                setNewTaxes={setNewTaxes}
                prevTaxes={prevTaxes}
                setPrevTaxes={setPrevTaxes}
            />
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
                {cat ? <CurrentShow cat={cat}/> : null}
            </div>

            <div className='info-buttons'>
                <button onClick={() => setDisplayItem(1)}>Enter your daily expenditures</button>
                <button onClick={() => setDisplayItem(2)}>Enter your income information</button>
                <button onClick={() => setDisplayItem(3)}>Enter your investments information</button>
                <button onClick={() => setDisplayItem(4)}>Enter your debt information</button>
                <button onClick={() => setDisplayItem(5)}>Enter your tax information</button>
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