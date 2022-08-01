

const Calculations = ({ totalDailyExp, incomeInfoState, taxInfoState, investInfoState, debtInfoState }) => {

    let income = incomeInfoState
    let relStatus = taxInfoState.relStatus
    let dependents = taxInfoState.dependents

    const toDecimal = (num) => {
        return num / 100
    }

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
        } else if (status === 'Married - filing seperately') {
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

    const actualTaxAmount = (income, relStatus, dependents) => {
        let taxAmount = taxCalculator(relStatus, income) - (dependents * 2000)
        if (taxAmount < 0) {
            return 0
        } else return taxAmount
    }
    console.log(taxCalculator(relStatus, income))
    console.log(actualTaxAmount(income, relStatus, dependents))

    const investmentCalculator = (amount, rate, compound) => {
        rate = toDecimal(rate)
        if (compound === 'Continuous (recommended)') return amount * (Math.E) ** (rate)
        if (compound === 'Quarterly') return (amount) * (1 + (rate / 4) ** (4))
        if (compound === 'Semi-Annual') return (amount) * (1 + (rate / 2) ** (2))
        if (compound === 'Annual') return (amount) * (1 + rate)
    }

    

    // https://www.calculatorsoup.com/calculators/financial/loan-calculator.php
    const debtCalculator = (amount, rate, term) => {
        rate = toDecimal(rate) / 12
        return parseFloat((rate * amount) / (1 - (1 / (1 + rate) ** (term * 12))))
    }

    const investArray = investInfoState.map((item) => { return investmentCalculator(item.amount, item.rate, item.compound) })
    const totalInvestments = (arr) => {
        let total = 0
        for (let i = 0 ; i < arr.length ; i++) {
            total += arr[i]
        }
        return total
    }
    //console.log(totalInvestmentGain(investArray))

    const debtArray = debtInfoState.map((item) => { return debtCalculator(item.amount, item.rate, item.loanTerm) })
    const totalDebt = (arr) => {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]
        }
        return total * 12
    }
    console.log(totalDebt(debtArray))

    let wholeTotal = income + totalInvestments(investArray) - totalDebt(debtArray) - actualTaxAmount(income, relStatus, dependents)

    console.log(wholeTotal/365)

    // totalYearlyNet = () => {
    //     income + investmentCalculator(amount, rate, compound)
    // }
}

export default Calculations