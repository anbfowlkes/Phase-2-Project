import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Styles/Results.css'
import DailyChart from './PieCharts/DailyChart'
import GainsChart from './PieCharts/GainsChart'
import LossesChart from './PieCharts/LossesChart'
import ShowDaily from './ShowDaily'
import './Styles/ShowDaily.css'

const Results = () => {
    let investSum = 0
    let debtSum = 0
    let incomeSum = 0
    let billSum = 0
    let taxSum = 0
    let dailyMoneySpent = 0
    const [debtArr, setDebtArr] = useState([])
    const [investArr, setInvestArr] = useState([])
    const [incomeArr, setIncomeArr] = useState([])
    const [billArr, setBillArr] = useState([])
    const [dailyArr, setDailyArr] = useState([])
    const [dailySubmit, setDailySubmit] = useState(true)
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
        let i = rate/12
        let x = (amount * (i))/(1-(1/(1+i)**(term*12)))
        return x

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
                return (amount - 40526) * mr3 + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 164925) {
                return (amount - 86376) * mr4 + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 209425) {
                return (amount - 164926) * mr5 + ((164925 - 86376) * mr4) + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
            } else if (amount < 523600) {
                return (amount - 209426) * mr6 + ((209425 - 164926) * mr5) + ((164925 - 86376) * mr4) + ((86375 - 40376) * mr3) + ((40525 - 9951) * mr2) + (9950 * mr1)
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

    // fetch daily arr
    const getDaily = () => {
        fetch('http://localhost:8000/daily')
            .then((res) => res.json())
            .then((req) => setDailyArr(req))
    }
    useEffect(() => {
        getDaily()
    }, [dailySubmit])

    // iterate investment array to find sum
    for (const elem of investArr) {
        let investResult = investmentCalculator(elem.investmentAmount, elem.investmentRate, elem.investmentCompound)
        investSum += investResult
    }

    // iterate debt array to find sum
    for (const elem of debtArr) {
        let debtResult = debtCalculator(elem.debtAmount, elem.debtRate, elem.debtTerm) //+ elem.debtAmount
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

    // iterate daily array to find sum
    for (const elem of dailyArr) {
        dailyMoneySpent += elem.dailyCost
    }

    // go through tax object to find sum
    taxSum = actualTaxAmount(taxObj.relStatus, incomeSum, taxObj.dependents)

    let dailyMoneyCalculated = parseFloat((incomeSum + investSum - billSum - debtSum - taxSum) / 365).toFixed(2)
    let dailyMoneyAvailable = dailyMoneyCalculated - dailyMoneySpent;

    const handleDailySubmit = (e) => {
        e.preventDefault()
        let item = e.target[0].value
        let cost = parseFloat(e.target[1].value)
        fetch('http://localhost:8000/daily', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dailyItem: item,
                dailyCost: cost
            })
        })
            .then((res) => res.json())
            .then(setDailySubmit(!dailySubmit))
    }

    useEffect(() => {
        dailyMoneyAvailable = dailyMoneyCalculated - dailyMoneySpent
    }, [dailySubmit])

    // console.log('calculated money', dailyMoneyCalculated)
    // console.log('available money', dailyMoneyAvailable)
    // console.log('spent money', dailyMoneySpent)

    // function to add commas to numbers
    const numDisplayer = (number) => {
        if (Math.floor(number) != number) {        
            let x = number.toString()
            let numArr = x.split('')
            console.log(numArr)
            let len = numArr.length
            let a = numArr.indexOf('.')
            for (let pos = a - 1; pos > 0; pos--) {
                if ((a - pos) % 3 == 0 && len - pos != 0) {
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
            console.log(x)
            let numArr = x.split('')
            console.log(numArr)
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

    const showColor = () => {
        if (parseFloat((dailyMoneySpent).toFixed(2)) < parseFloat((incomeSum + investSum - billSum - debtSum - taxSum) / 365)) {
            return { backgroundColor: '#118C4F'}
        } else {
            return { backgroundColor: 'red'}
        }
    }
    let c = 0

    return (
        <div className='results'>

            <h1 id='title'>See Your Results</h1>
            
            <div className='div-container'>

                <div className='info-display'>

                        <div id='top-three'>

                        <div className='table-container'>
                            <h3><u>Budget Data:</u></h3>
                            <Table striped bordered hover >
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Daily Net</th>
                                        <th>Yearly Net</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Income:</td>
                                        <td>${numDisplayer(parseFloat((incomeSum / 365).toFixed(2)))}</td>
                                        <td>${numDisplayer(parseFloat(incomeSum.toFixed(2)))}</td>
                                    </tr>
                                    <tr>
                                        <td>Investments:</td>
                                        <td>${numDisplayer(parseFloat((investSum / 365).toFixed(2)))}</td>
                                        <td>${numDisplayer(parseInt((investSum).toFixed(2)))}</td>
                                    </tr>
                                    <tr>
                                        <td>Bills:</td>
                                        <td>-${numDisplayer(parseFloat((billSum / 365).toFixed(2)))}</td>
                                        <td>-${numDisplayer(parseFloat(billSum.toFixed(2)))}</td>
                                    </tr>
                                    <tr>
                                        <td>Debt:</td>
                                        <td>-${numDisplayer(parseFloat((debtSum*(12/365)).toFixed(2)))}</td>
                                        <td>-${numDisplayer(parseFloat((debtSum*12).toFixed(2)))}</td>
                                    </tr>
                                    <tr>
                                        <td>Taxes:</td>
                                        <td>-${numDisplayer(parseFloat((taxSum / 365).toFixed(2)))}</td>
                                        <td>-${numDisplayer(parseFloat(taxSum.toFixed(2)))}</td>
                                    </tr>
                                    <tr>
                                        <td>Daily Expenses:</td>
                                        <td>-${numDisplayer(parseFloat((dailyMoneySpent).toFixed(2)))}</td>
                                        <td>-${numDisplayer(parseFloat((dailyMoneySpent).toFixed(2))*365)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total Net:</td>
                                        <td>${numDisplayer(parseFloat((((incomeSum + investSum - billSum - debtSum - taxSum) / 365) - dailyMoneySpent).toFixed(2)))}</td>
                                        <td>${numDisplayer(parseFloat((incomeSum + investSum - billSum - debtSum - taxSum/365).toFixed(2)))}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div className='daily-chart'>
                                <h2>Today's Spending:</h2>
                                <DailyChart dailyMoneySpent={dailyMoneySpent} dailyMoneyAvailable={dailyMoneyAvailable} />
                            </div>

                        <div className='daily-form'>
                                <h4 id='head'><u>{"Today's Daily Expense:"}</u></h4>
                                <form onSubmit={handleDailySubmit}>
                                    <input type='text' placeholder='Item' />
                                    <br />
                                    <input type='text' placeholder='Cost' />
                                    <br />
                                    <input id='submitter' type='submit' value='Submit' />
                                </form>
                                <p>*Check your daily expenditures below</p>
                            </div>

                    </div>

                    <div id='second-row'>
                        <div style={showColor()} className='boxes'>
                            <h5>Daily Money Available</h5>
                            <h2>${numDisplayer(parseFloat((((incomeSum + investSum - billSum - debtSum - taxSum) / 365)).toFixed(2)))}</h2>
                        </div>
                        <div style={showColor()} className='boxes'>
                            <h5>Daily Money Spent</h5>
                            <h2>${`${ numDisplayer(parseFloat((dailyMoneySpent).toFixed(2)))}`}</h2>
                        </div>
                        <div style={showColor()} className='boxes'>
                            <h5>Daily Money Left</h5>
                            <h2>${numDisplayer(parseFloat((((incomeSum + investSum - billSum - debtSum - taxSum) / 365) - dailyMoneySpent).toFixed(2)))}</h2>
                        </div>
                    </div>






                    <div id='third-row'>

                        <div className='gains-chart'>
                            <h3>Yearly Money Gains Chart</h3>
                            <GainsChart incomeSum={incomeSum} investSum={investSum} />
                        </div>

                        <div className='losses-chart'>
                            <h3>Yearly Money Losses Chart</h3>
                            <LossesChart debtSum={debtSum} taxSum={taxSum} billSum={billSum} />
                        </div>

                    </div>

                </div>

                <div id='list-container'>
                    <div id='list-div'>
                        <h4><u>{'Your Daily Expenditures:'}</u></h4>
                        <ol>
                            {dailyArr.map((item) => {
                                return (
                                    <ShowDaily item={item}  id={item.id} getDaily={getDaily} numDisplayer={numDisplayer} key={c++} />
                                    )
                                })}
                        </ol>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Results