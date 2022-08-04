const DebtsShow = ({ item, id, getDebt, numDisplayer } ) => {
    let description = item.description
    let amount = item.debtAmount
    let rate = item.debtRate
    let term = item.debtTerm

    const handleClick = () => {
        fetch(`http://localhost:8000/debt/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => getDebt())
    }

    return (
        <div>
            <li>
                <p><u>{`${description}`}</u></p>
                <p>{'Amount Owed: '}<u>{`$${numDisplayer(amount)}`}</u></p>
                <p>{'Rate of Interest: '}<u>{`${rate*100}%`}</u></p>
                <p>{'Loan Term: '}<u>{`${term} Years`}</u></p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default DebtsShow