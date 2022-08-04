const InvestmentsShow = ({ item, id, getInvestments, numDisplayer }) => {
    let description = item.description
    let amount = item.investmentAmount
    let rate = item.investmentRate
    let compoundRate = item.investmentCompound

    const handleClick = () => {
        fetch(`http://localhost:8000/investments/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => getInvestments())
    }
    
    return ( 
        <div>
            <li>
                <p><u>{`${description}`}</u></p>
                <p>{'Amount Invested: '}<u>{`$${numDisplayer(amount)}`}</u></p>
                <p>{'Growth Rate: '}<u>{`${rate*100}%`}</u></p>
                <p>{'Compounded: '}<u>{`${compoundRate}`}</u></p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
     )
}

export default InvestmentsShow