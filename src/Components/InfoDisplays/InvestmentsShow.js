const InvestmentsShow = ({item, id}) => {
    let description = item.description
    let amount = item.investmentAmount
    let rate = item.investmentRate
    let compoundRate = item.investmentCompound

    const handleClick = () => {
        fetch(`http://localhost:8000/investments/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
    
    return ( 
        <div>
            <li>
                <p>{`${description}`}</p>
                <p>{`Amount Invested: ${amount}`}</p>
                <p>{`Growth Rate: ${rate}%`}</p>
                <p>{`Compounded: ${compoundRate}`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
     )
}

export default InvestmentsShow