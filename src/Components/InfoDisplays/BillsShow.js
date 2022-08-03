const BillsShow = ({ item, id, setRend }) => {
    let type = item.billType
    let amount = item.monthlyAmount

    const handleClick = () => {
        fetch(`http://localhost:8000/bills/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then(setRend((prev) => !prev))
    }

    return (
        <div>
            <li>
                <p>{`"${type}" bill`}</p>
                <p>{`Monthly Amount: ${amount}`}</p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr></hr>
        </div>
    )
}

export default BillsShow