import { useEffect } from "react"

const IncomeInfo = ({ 
    newIncome,
    prevIncome,
    setPrevIncome,
    setNewIncome
 }) => {


   const handleSubmit = (e) => {
    e.preventDefault()
    let val = e.target[0].value
    fetch('http://localhost:8000/income', {
    method: 'PATCH',
    body: JSON.stringify({
        incomeAmount: val
    }),
    headers: {
        'Content-type': 'application/json'
    },
    })
    .then((res) => res.json())
    .then((newItem) => setPrevIncome(newItem))
   }
  
    return (
        <div>
            <h3>Enter your income information here {'(including salary, wages and tips'}</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Income'/>
                <br />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default IncomeInfo