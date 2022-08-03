const DebtInfo = ({ 
    newDebts,
    setNewDebts,
    prevDebts,
    setPrevDebts
 } ) => {
    const handleDebtSubmit = (e) => {
        e.preventDefault()
        let description = e.target[0].value
        let amount = parseFloat(e.target[1].value)
        let rate = parseFloat(e.target[2].value)/100.0
        let loanTerm = parseFloat(e.target[3].value)

        fetch('http://localhost:8000/debt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: description,
                debtAmount: amount,
                debtRate: rate,
                debtTerm: loanTerm
            })
        })
            .then((res) => res.json())
            .then((newItem) => setNewDebts([...newDebts, newItem]))

    }

    return (
        <div>
            <h3>Enter your investments information here</h3>
            <form onSubmit={handleDebtSubmit}>
                <input type='text' placeholder='Debt Description' />
                <br />
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