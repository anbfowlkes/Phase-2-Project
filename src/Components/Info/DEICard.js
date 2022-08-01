const DEICard = ({ DEIArray, setDEIArray, setTotalDailyExp, setDailyExpObj } ) => {

    const addAnother = () => {
        setDEIArray([...DEIArray, 1])
    }

    const handleEntry = (e) => {
        e.preventDefault()
        let val = parseInt(e.target[1].value)
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