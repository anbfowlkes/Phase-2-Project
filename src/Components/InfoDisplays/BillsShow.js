const BillsShow = ({ item, id, getBills }) => {
    let type = item.billType
    let amount = item.monthlyAmount

    const handleClick = () => {
        fetch(`http://localhost:8000/bills/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => getBills())
    }

    return (
        <div>
            <li>
                <p>{`${type} Bill`}</p>
                <p>{`Monthly Amount: ${amount} dollars`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default BillsShow