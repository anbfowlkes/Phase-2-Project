const DEICard = ({ DEIArray, setDEIArray, setTotalDailyExp, setDailyExpObj } ) => {

    const addAnother = () => {
        setDEIArray([...DEIArray, 1])
    }

    const handleEntry = (e) => {
        e.preventDefault()
        let item = e.target[0].value
        let val = parseInt(e.target[1].value)

        fetch('http://localhost:8000/daily', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dailyItem: item,
                dailyAmount: val,
            })
        })
            .then((res) => res.json())


        setTotalDailyExp((prevVal) => prevVal + val)
    }
                
    return (
        <div>
            <form onSubmit={handleEntry}>
                <input type='text' placeholder='Item'/>
                <br />
                <input type='text' placeholder='Cost' />
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default DEICard