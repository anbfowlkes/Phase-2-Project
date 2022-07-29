import { useState } from 'react'
import TaxInfo from './TaxInfo'
import IncomeInfo from './IncomeInfo'
import DailyExpInfo from './DailyExpInfo'
import DebtInfo from './DebtInfo'
import InvestmentsInfo from './InvestmentsInfo'


const InfoPage = () => {

    const [setter, setSetter] = useState(true)

    return (
        <div>
            <h1>Welcome to the Information Page</h1>
            <TaxInfo />
            <IncomeInfo />
            <DebtInfo />
            <InvestmentsInfo />
            <DailyExpInfo setSetter={setSetter} />
        </div>
    )
}

export default InfoPage