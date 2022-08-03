const DailyShow = ( {item, id} ) => {

    const handleClick = () =>{
        // let x = 0
        // if (prevSpending.includes(item)) {
        //     x = 0
        // } else if (newSpending.includes(item)){
        //     x = 1
        // }

        fetch(`http://localhost:8000/daily/${id}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        //     if (x === 0) {
        //         let y = prevSpending.indexOf(item)
        //         if (y > -1) {
        //             setPrevSpending([...prevSpending].splice(y, 1))
        //         }
                
        //     }
        // })
    }

    return (
        <div onClick={handleClick}>
            <li>
                {`${item.dailyItem}  -  ${item.dailyAmount} dollars`}
            </li>
        </div>
    )
}

export default DailyShow