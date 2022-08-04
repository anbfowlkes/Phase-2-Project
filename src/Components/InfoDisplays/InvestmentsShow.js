const InvestmentsShow = ({item, id, getInvestments}) => {
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
                <p>{`${description}`}</p>
                <p>{`Amount Invested: ${amount}`}</p>
                <p>{`Growth Rate: ${rate*100}%`}</p>
                <p>{`Compounded: ${compoundRate}`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
     )
}

export default InvestmentsShow