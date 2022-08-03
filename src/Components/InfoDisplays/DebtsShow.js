const DebtsShow = ( {item, id} ) => {
    let amount = item.debtAmount
    let rate = item.debtRate
    let term = item.debtTerm
    let x

    const handleClick = () => {
        fetch(`http://localhost:8000/debt/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    return (
        <div>
            <li>
                <p>{`Amount Owed: ${amount}`}</p>
                <p>{`Rate of Interest: ${rate}%`}</p>
                <p>{`Loan Term: ${term} years`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default DebtsShow