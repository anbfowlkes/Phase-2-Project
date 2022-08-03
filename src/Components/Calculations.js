import { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
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
        if (status === 'Single') {
            if (amount < 9950) {
                return amount * .1
            } else if (amount < 40525) {
                return (amount - 9950) * .12 + (995)
            } else if (amount < 86375) {
                return (amount - 40525) * .22 + (3669) + (995)
            } else if (amount < 164925) {
                return (amount - 86376) * .24 + (11004) + (3669) + (995)
            } else if (amount < 209425) {
                return (amount - 164926) * .32 + (25136) + (11004) + (3669) + (995)
            } else if (amount < 523600) {
                return (amount - 209426) * .35 + (15575) + (25136) + (11004) + (3669) + (995)
            } else {
                return (amount - 523601) * 37 + (116244) + (15575) + (25136) + (11004) + (3669) + (995)
            }
        } else if (status === 'Married - filing separately') {
            if (amount < 9950) {
                return amount * .1
            } else if (amount < 40525) {
                return (amount - 9950) * .12 + (995)
            } else if (amount < 86375) {
                return (amount - 40525) * .22 + (3669) + (995)
            } else if (amount < 164925) {
                return (amount - 86376) * .24 + (11004) + (3669) + (995)
            } else if (amount < 209425) {
                return (amount - 164926) * .32 + (25136) + (11004) + (3669) + (995)
            } else if (amount < 314150) {
                return (amount - 209426) * .35 + (15575) + (25136) + (11004) + (3669) + (995)
            } else {
                return (amount - 523601) * 37 + (36653) + (15575) + (25136) + (11004) + (3669) + (995)
            }
        } else if (status === 'Married - filing jointly') {
            if (amount < 19900) {
                return amount * .1
            } else if (amount < 81050) {
                return (amount - 19900) * .12 + (1990)
            } else if (amount < 172750) {
                return (amount - 81051) * .22 + (7338) + (1990)
            } else if (amount < 329850) {
                return (amount - 172751) * .24 + (20173) + (7338) + (1990)
            } else if (amount < 418850) {
                return (amount - 329851) * .32 + (37704) + (20173) + (7338) + (1990)
            } else if (amount < 628300) {
                return (amount - 418851) * .35 + (28480) + (37704) + (20173) + (7338) + (1990)
            } else {
                return (amount - 628301) * 37 + (36653) + (28480) + (37704) + (20173) + (7338) + (1990)
            }
        } else if (status === 'Head of Household') {
            if (amount < 14200) {
                return amount * .1
            } else if (amount < 54200) {
                return (amount - 14201) * .12 + (1420)
            } else if (amount < 86350) {
                return (amount - 54201) * .22 + (4800) + (1420)
            } else if (amount < 164900) {
                return (amount - 86351) * .24 + (7073) + (4800) + (1420)
            } else if (amount < 209400) {
                return (amount - 164901) * .32 + (18852) + (7073) + (4800) + (1420)
            } else if (amount < 523600) {
                return (amount - 209401) * .35 + (14240) + (18852) + (7073) + (4800) + (1420)
            } else {
                return (amount - 628301) * 37 + (109970) + (14240) + (18852) + (7073) + (4800) + (1420)
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

    return (
        <div className='display'>
            <div className='totals'>
                <div className='dynamic-daily-net'>
                    <h3>Money Availble</h3>
                </div>
                <div className='static-daily-net'>
                    <h3>Money Available</h3>
                </div>
            </div>
            <div>
                <div className='info-display'>
                    <div className='daily-expenditures'>
                        <div>
                            <form>
                                <input type='text' placeholder='Item' />
                                <br />
                                <input type='text' placeholder='Cost' />
                                <br />
                                <input type='submit' value='Submit' />
                            </form>
                        </div>
                        <div>
                            <h2>Daily Money Available</h2>
                            <PieChart className='chart3'
                                animation
                                data={[
                                    { title: 'Daily Money Available', value: dailyMoney, color: '#118C4F' }
                                ]}
                            />
                        </div>
                    </div>

                    <div className='table'>
                        <h3> Data Table</h3>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Daily Net</th>
                                    <th></th>
                                    <th>Yearly Net</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Income</td>
                                    <td>${parseInt(incomeSum / 365).toFixed(2)}</td>
                                    <td>${incomeSum.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Investments</td>
                                    <td>${parseFloat(investSum / 365).toFixed(2)}</td>
                                    <td>${parseInt(investSum).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Bills</td>
                                    <td>-${parseInt(billSum / 365).toFixed(2)}</td>
                                    <td>-${billSum.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Debt</td>
                                    <td>-${parseFloat(debtSum / 365).toFixed(2)}</td>
                                    <td>-${parseFloat(debtSum).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Taxes</td>
                                    <td>-${parseFloat(taxSum / 365).toFixed(2)}</td>
                                    <td>-${parseFloat(taxSum).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Total Net</td>
                                    <td>${parseFloat((incomeSum + investSum - billSum - debtSum - taxSum) / 365).toFixed(2)}</td>
                                    <td>${parseFloat((incomeSum + investSum - billSum - debtSum - taxSum)).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                    <div className='chart-container'>
                        <div>
                            <h3>Money Gains Chart</h3>
                            <PieChart className='chart1'
                                data={[
                                    { title: 'Income', value: incomeSum, color: '#E38627' },
                                    { title: 'Investments', value: investSum, color: '#C13C37' }
                                ]}
                            />
                        </div>
                        <div>
                            <h3>Money Losses Chart</h3>
                            <PieChart className='chart2'
                                label={() => 'hi'}

                                labelPosition={1}
                                labelStyle={{
                                    fontSize: "10px",
                                    fontColor: "FFFFFA",
                                    fontWeight: "800",
                                }}
                                data={[
                                    { title: 'Debt', value: debtSum, color: '#E38627' },
                                    { title: 'Taxes', value: taxSum, color: '#C13C37' },
                                    { title: 'Bills', value: billSum, color: '#6A2135' }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // total daily money available
        // amount gained and lost
        // ability to etner more daily expenses
        // table showing positive and negative contributions from all sources
    )
}

export default Results