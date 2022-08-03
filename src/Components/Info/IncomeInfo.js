import { useEffect } from "react"

const IncomeInfo = ({ 
    newIncome,
    setNewIncome,
    prevIncome,
    setPrevIncome
 }) => {


   const handleSubmit = (e) => {
    e.preventDefault()
    let desc = e.target[0].value
    let val = parseFloat(e.target[1].value)
    fetch('http://localhost:8000/income', {
    method: 'POST',
    body: JSON.stringify({
<<<<<<< HEAD
        description: desc,
        incomeAmount: val
=======
        incomeAmount: parseFloat(val)
>>>>>>> origin/Results-Page
    }),
    headers: {
        'Content-type': 'application/json'
    },
    })
    .then((res) => res.json())
    .then((newItem) => setNewIncome([...newIncome, newItem]))
   }
  
    return (
        <div>
            <h3>Enter your income information here {'(including salary, wages and tips'}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Income Source' />
                <br />
                <input type='text' placeholder='Amount'/>
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default IncomeInfo