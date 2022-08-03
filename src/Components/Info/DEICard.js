import { useEffect } from 'react'

const DEICard = ({ 
    DEIArray, 
    setDEIArray, 
    newSpending,
    setNewSpending,
    prevSpending,
    setPrevSpending
    } ) => {




    const addAnother = () => {
        setDEIArray([...DEIArray, 1])
    }

    const handleEntry = (e) => {
        e.preventDefault()
        let item = e.target[0].value
        let val = parseInt(e.target[1].value)

        fetch('http://localhost:3000/daily', {
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
            .then((newItem) => setNewSpending([...newSpending, newItem]))


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