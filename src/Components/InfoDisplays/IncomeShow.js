const IncomeShow = ({ item, id, getIncome }) => {
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
                <p>{`Revenue Source: ${description}`}</p>
                <p>{`Annual Amount: ${amount} dollars`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default IncomeShow