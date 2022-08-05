const BillsShow = ({ item, id, getBills, numDisplayer }) => {
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
                <p><u>{`${type} Bill`}</u></p>
                <p>{'Monthly Amount: '}<u>{`$${numDisplayer(amount)}`}</u></p>
                <button onClick={handleClick}>Click to delete</button>
            </li>
            <hr style={{border: '2px solid black'}}></hr>
        </div>
    )
}

export default BillsShow