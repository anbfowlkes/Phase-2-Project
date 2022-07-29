import { useState } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DailyExpInfo from './Info/DailyExpInfo'
import DebtInfo from './Info/DebtInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'


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