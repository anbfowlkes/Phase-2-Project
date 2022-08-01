const InvestmentsInfo = ({ investInfoState, setInvestInfoState } ) => {

    const handleInvestSubmit = (e) => {
        e.preventDefault()
        let amount = e.target[0].value
        let rate = e.target[1].value
        let compound = e.target[2].value
        setInvestInfoState([...investInfoState, {amount: amount, rate: rate, compound: compound}])
    }

    return (
        <div>
            <h3>Enter your investments information here</h3>
            <form onSubmit={handleInvestSubmit}>
                <input type='text' placeholder='Amount'/>
                <br/>
                <input type='text' placeholder='Annual Interest Rate'/>
                <br/>
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
    )
}

export default InvestmentsInfo