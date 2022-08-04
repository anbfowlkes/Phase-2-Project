const IncomeShow = ({ item, id, getIncome, numDisplayer }) => {
    let description = item.description
    let amount = item.incomeAmount

    const handleClick = () => {
        fetch(`http://localhost:8000/income/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => getIncome())
    }

    return (
        <div>
            <li>
                <p>{'Income Source: '}<u>{`${description}`}</u></p>
                <p>{'Annual Amount: '}<u>{`$${numDisplayer(amount)}`}</u></p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default IncomeShow