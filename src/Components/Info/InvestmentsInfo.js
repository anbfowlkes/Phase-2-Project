import '../Styles/InvestmentsInfo.css'

const InvestmentsInfo = ({ 
    getInvestments
 }) => {

    const handleInvestSubmit = (e) => {
        e.preventDefault()
        let description = e.target[0].value
        let amount = parseFloat(e.target[1].value)
        let rate = parseFloat(e.target[2].value)/100.0
        let compound = e.target[3].value

        fetch('http://localhost:8000/investments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: description,
                investmentAmount: amount,
                investmentRate: rate,
                investmentCompound: compound
            })
        })
            .then((res) => res.json())
            .then((newItem) => getInvestments())

    }

    return (
        <div className='investments-form'>
            <div id='investment-header'>
                <h3>Enter your investments information here:</h3>
            </div>
            <div id='investment-form-container'>

                <form onSubmit={handleInvestSubmit}>
                    <input type='text' placeholder='Investment Description' />
                    <br />
                    <input type='text' placeholder='Amount' />
                    <br />
                    <input type='text' placeholder='Annual Interest Rate' />
                    <br />
                    <label htmlFor='compound'>Choose your compound interest: </label>

                    <select name='compound'>
                        <option>Continuous (recommended)</option>
                        <option>Quarterly</option>
                        <option>Semi-Annual</option>
                        <option>Annual</option>
                    </select>
                    <br />
                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}

export default InvestmentsInfo