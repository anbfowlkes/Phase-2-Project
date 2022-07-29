const DEICard = ({DEIArray, setDEIArray} ) => {

    const addAnother = () => {
        setDEIArray([...DEIArray, 1])
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Item'/>
                <input type='text' placeholder='Cost' />
                <input type='submit' value='Add Expenditure' onClick={addAnother} />
            </form>
        </div>
    )
}

export default DEICard