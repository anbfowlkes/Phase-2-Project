import '../Styles/DebtInfo.css'


const DebtInfo = ({ 
    getDebt
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
            .then((newItem) => getDebt())

    }

    return (
        <div className='debt-form'>
            <div className='debt-header'>
                <h3>Enter your debt information here:</h3>
            </div>
            <div className='debt-form-container'>
                <form onSubmit={handleDebtSubmit}>
                    <input type='text' placeholder='Debt Description' />
                    <br />
                    <input type='text' placeholder='Amount'/>
                    <br/>
                    <input type='text' placeholder='Interest Rate (in a percentage)'/>
                    {/* <label> % </label> */}
                    <br/>
                    <input type='text' placeholder='Loan Term (in years)'/>
                    <br />
                    <input id='debt-submit' type='submit' />
                </form>
            </div>
        </div>
    )
}

export default DebtInfo