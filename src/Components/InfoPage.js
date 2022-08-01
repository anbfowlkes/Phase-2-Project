import { useState } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DailyExpInfo from './Info/DailyExpInfo'
import DebtInfo from './Info/DebtInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'


const InfoPage = ({ 
    setTotalDailyExp, 
    setDailyExpObj, 
    setIncome, 
    setTaxInfoState, 
    taxInfoState, 
    debtInfoState,
    setDebtInfoState,
    investInfoState,
    setInvestInfoState } ) => {

    const [setter, setSetter] = useState(true)
    const [displayItem, setDisplayItem] = useState(0)

    const showItem = (num) => {
        if (num === 0) {
            return <DailyExpInfo 
            setSetter={setSetter} 
            setTotalDailyExp={setTotalDailyExp} 
            setDailyExpObj={setDailyExpObj} 
            />
        } else if (num === 1) {
            return <IncomeInfo setIncome={setIncome} />
        } else if (num === 2) {
            return <InvestmentsInfo investInfoState={investInfoState} setInvestInfoState={setInvestInfoState} />
        } else if (num === 3) {
            return <DebtInfo debtInfoState={debtInfoState} setDebtInfoState={setDebtInfoState} />
        } else if (num === 4) {
            return <TaxInfo setTaxInfoState={setTaxInfoState} taxInfoState={taxInfoState} />
        }
    }

    return (
        <div>
            <h1>Welcome to the Information Page</h1>

            <div className='info-div'>
                {showItem(displayItem)}
            </div>
            <div className='info-buttons'>
                <button onClick={() => setDisplayItem(0)}>Enter your daily expenditures</button>
                <button onClick={() => setDisplayItem(1)}>Enter your income information</button>
                <button onClick={() => setDisplayItem(2)}>Enter your investments information</button>
                <button onClick={() => setDisplayItem(3)}>Enter your debt information</button>
                <button onClick={() => setDisplayItem(4)}>Enter your tax information</button>
            </div>
            
        </div>
    )
}

export default InfoPage