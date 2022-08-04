const ShowDaily = ({ item, id, getDaily, numDisplayer }) => {
    let description = item.dailyItem
    let amount = item.dailyCost

    const handleClick = () => {
        fetch(`http://localhost:8000/daily/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => getDaily())
    }

    return (
        <div id='show-daily-div'>
            <li>
                <div id='do-flex'>
                    <div><p>{'Daily Expense: '}<u>{`${description}`}</u></p></div>
                    <div><p>{'Amount: '}<u>{`$${numDisplayer(amount)}`}</u></p></div>
                    <div><button id='the-button' onClick={handleClick}>Click to delete</button></div>
                </div>
            </li>
            <hr></hr>
        </div>
    )
}

export default ShowDaily