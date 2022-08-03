const DailyShow = ( {item, id} ) => {

    const handleClick = () =>{
        fetch(`http://localhost:8000/daily/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        
    }
    console.log(item)
    return (
        <div>
            <div>
            <li>
                {`${item.dailyItem}  -  ${item.dailyAmount} dollars`}
                <button onClick={handleClick}>Click to delete</button>
            </li>
            </div>
        </div>
    )
}

export default DailyShow