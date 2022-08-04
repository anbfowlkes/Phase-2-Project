import { useEffect, useState } from 'react'
//import { PieChart } from 'react-minimal-pie-chart';
import Table from 'react-bootstrap/Table';
import './Results.css'


const Results = () => {
    let investSum = 0
    let debtSum = 0
    let incomeSum = 0
    let billSum = 0
    let taxSum = 0
    const [debtArr, setDebtArr] = useState([])
    const [investArr, setInvestArr] = useState([])
    const [incomeArr, setIncomeArr] = useState([])
    const [billArr, setBillArr] = useState([])
    const [taxObj, setTaxObj] = useState({
        relStatus: '',
        dependents: 0
    })

    // function to calculate investment growth
    const investmentCalculator = (amount, rate, compound) => {
        if (compound === 'Continuous (recommended)') return amount * (Math.E) ** (rate)
        if (compound === 'Quarterly') return (amount) * (1.0 + (rate / 4)) ** (4)
        if (compound === 'Semi-Annual') return (amount) * (1.0 + (rate / 2)) ** (2)
        if (compound === 'Annual') return (amount) * (1.0 + rate)
    }

    // function to calculate debt growth 
    // https://www.calculatorsoup.com/calculators/financial/loan-calculator.php
    const debtCalculator = (amount, rate, term) => {
        return (((rate / 12) * amount) / (1 - (1 / (1 + (rate / 12)) ** (term * 12))))
    }

    // function to calculate taxes
    const taxCalculator = (status, amount) => {
        let mr1 = .25  //.1
        let mr2 = .34  //.12
        let mr3 = .36  //.22
        let mr4 = .40  //.24
        let mr5 = .42  //.32
        let mr6 = .44  //.35
        let mr7 = .46  //.37

        if (status === 'Single') {
            if (amount < 9950) {
                return amount * mr1
            } else if (amount < 40525) {
                return (amount - 9951) * mr2 + (9950 * mr1)
            } else if (amount < 86375) {
                return (amount - 40526) * mr3 + ((40525-9951) * mr2) + (9950 * mr1)
            } else if (amount < 164925) {
                return (amount - 86376) * mr4 + ((86375-40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 209425) {
                return (amount - 164926) * mr5 + ((164925-86376) * mr4) + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 523600) {
                return (amount - 209426) * mr6 + ((209425-164926) * mr5) + ((164925 - 86376) * mr4) + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else {
                return (amount - 523601) * mr7 + ((523601 - 209425) * mr6) + ((209425 - 164926) * mr5) + ((164925 - 86376) * mr4) + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            }
        } else if (status === 'Married - filing separately') {
            if (amount < 9950) {
                return amount * mr1
            } else if (amount < 40525) {
                return (amount - 9951) * mr2 + (9950 * mr1)
            } else if (amount < 86375) {
                return (amount - 40526) * mr3 + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 164925) {
                return (amount - 86376) * mr4 + ((86375 - 40526) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 209425) {
                return (amount - 164926) * mr5 + ((164925 - 86376) * mr4) + ((86375 - 40526) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 314150) {
                return (amount - 209426) * mr6 + ((209425 - 164926) * mr5) + ((164925 - 86376) * mr4) + ((86375 - 40526) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else {
                return (amount - 523601) * mr7 + ((314150 - 209426) * mr6) + ((209425 - 164926) * mr5) + ((164925 - 86376) * mr4) + ((86375 - 40526) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            }
        } else if (status === 'Married - filing jointly') {
            if (amount < 19900) {
                return amount * mr1
            } else if (amount < 81050) {
                return (amount - 19901) * mr2 + (19900 * mr1)
            } else if (amount < 172750) {
                return (amount - 81051) * mr3 + ((81050 - 19901) * mr2) + (19900 * mr1)
            } else if (amount < 329850) {
                return (amount - 172751) * mr4 + ((172750 - 81051) * mr3) + ((81050 - 19901) * mr2) + (19900 * mr1)
            } else if (amount < 418850) {
                return (amount - 329851) * mr5 + ((329850 - 172751) * mr4) + ((172750 - 81051) * mr3) + ((81050 - 19901) * mr2) + (19900 * mr1)
            } else if (amount < 628300) {
                return (amount - 418851) * mr6 + ((418850 - 329851) * mr5) + ((329850 - 172751) * mr4) + ((172750 - 81051) * mr3) + ((81050 - 19901) * mr2) + (19900 * mr1)
            } else {
                return (amount - 628301) * mr7 + ((628300 - 418851) * mr6) + ((418850 - 329851) * mr5) + ((329850 - 172751) * mr4) + ((172750 - 81051) * mr3) + ((81050 - 19901) * mr2) + (19900 * mr1)
            }
        } else if (status === 'Head of Household') {
            if (amount < 14200) {
                return amount * mr1
            } else if (amount < 54200) {
                return (amount - 14201) * mr2 + (14200 * mr1)
            } else if (amount < 86350) {
                return (amount - 54201) * mr3 + ((54200 - 14201) * mr2) + (14200 * mr1)
            } else if (amount < 164900) {
                return (amount - 86351) * mr4 + ((86350 - 54201) * mr3) + ((54200 - 14201) * mr2) + (14200 * mr1)
            } else if (amount < 209400) {
                return (amount - 164901) * mr5 + ((164900 - 86351) * mr4) + ((86350 - 54201) * mr3) + ((54200 - 14201) * mr2) + (14200 * mr1)
            } else if (amount < 523600) {
                return (amount - 209401) * mr6 + ((209400 - 164901) * mr5) + ((164900 - 86351) * mr4) + ((86350 - 54201) * mr3) + ((54200 - 14201) * mr2) + (14200 * mr1)
            } else {
                return (amount - 628301) * mr7 + ((523600 - 209401) * mr6) + ((209400 - 164900) * mr5) + ((164900 - 86351) * mr4) + ((86350 - 54201) * mr3) + ((54200 - 14201) * mr2) + (14200 * mr1)
            }
        }
    }

    // function to calculate actual taxes with dependents
    const actualTaxAmount = (status, income, dependents) => {
        let taxAmount = taxCalculator(status, income) - (dependents * 2000)
        if (taxAmount < 0) {
            return 0
        } else return taxAmount
    }

    console.log(actualTaxAmount('Single', 100000, 2))

    // fetch investments array
    useEffect(() => {
        fetch('http://localhost:8000/investments')
            .then((res) => res.json())
            .then((req) => setInvestArr(req))
    }, [])

    // fetch debt array
    useEffect(() => {
        fetch('http://localhost:8000/debt')
            .then((res) => res.json())
            .then((req) => setDebtArr(req))
    }, [])

    // fetch income array
    useEffect(() => {
        fetch('http://localhost:8000/income')
            .then((res) => res.json())
            .then((req) => setIncomeArr(req))
    }, [])

    // fetch bill array
    useEffect(() => {
        fetch('http://localhost:8000/bills')
            .then((res) => res.json())
            .then((req) => setBillArr(req))
    }, [])

    // fetch taxes object
    useEffect(() => {
        fetch('http://localhost:8000/taxes')
            .then((res) => res.json())
            .then((req) => setTaxObj(req))
    }, [])

    // iterate investment array to find sum
    for (const elem of investArr) {
        let investResult = investmentCalculator(elem.investmentAmount, elem.investmentRate, elem.investmentCompound)
        investSum += investResult
    }

    // iterate debt array to find sum
    for (const elem of debtArr) {
        let debtResult = debtCalculator(elem.debtAmount, elem.debtRate, elem.debtTerm) + elem.debtAmount
        debtSum += debtResult
    }

    // iterate income array to find sum
    for (const elem of incomeArr) {
        incomeSum += elem.incomeAmount
    }

    // iterate bill array to find sum
    for (const elem of billArr) {
        billSum += elem.monthlyAmount * 12
    }

    // go through tax object to find sum
    taxSum = actualTaxAmount(taxObj.relStatus, incomeSum, taxObj.dependents)

    let dailyMoney = parseFloat((incomeSum + investSum - billSum - debtSum - taxSum) / 365).toFixed(2)

    // <PieChart
    //     data={[
    //         { title: 'Daily Money Available', value: dailyMoney, color: '#E38627' }
    //     ]}
    // />

    {/* <div className='totals'>
        <div className='dynamic-daily-net'>
            <h3>Money Availble</h3>
        </div>
        <div className='static-daily-net'>
            <h3>Money Available</h3>
        </div>
    </div> */}

    /* const handleDailySubmit = (e) => {
        let item = 
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value, e.target[2].value)


    } 
    */

    return (
        <div className='display'>
            {console.log(actualTaxAmount('Single', 100000, 2))
}
            <div className='info-display'>
               
            </div>

            <div className='table'>
               
            </div>

            <div className='chart-container'>
               
            </div>
        </div>
        // total daily money available
        // amount gained and lost
        // ability to etner more daily expenses
        // table showing positive and negative contributions from all sources
    )
}

export default Results