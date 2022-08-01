const DebtInfo = ({ debtInfoState, setDebtInfoState } ) => {
    const handleDebtSubmit = (e) => {
        e.preventDefault()
        let amount = e.target[0].value
        let rate = e.target[1].value
        let loanTerm = e.target[2].value
        setDebtInfoState([...debtInfoState, {amount: amount, rate: rate, loanTerm: loanTerm}])
    }

    return (
                <div>
            <h3>Enter your investments information here</h3>
            <form onSubmit={handleDebtSubmit}>
                <input type='text' placeholder='Amount'/>
                <br/>
                <input type='text' placeholder='Interest Rate (in a percentage)'/>
                <label> % </label>
                <br/>
                <input type='text' placeholder='Loan Term (Time to pay off)'/>
                <label> years </label>
                <br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default DebtInfo