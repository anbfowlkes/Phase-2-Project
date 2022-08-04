import '../Styles/IncomeInfo.css'

const IncomeInfo = ({ 
    getIncome
 }) => {


   const handleSubmit = (e) => {
    e.preventDefault()
    let desc = e.target[0].value
    let val = parseFloat(e.target[1].value)
    fetch('http://localhost:8000/income', {
    method: 'POST',
    body: JSON.stringify({
        description: desc,
        incomeAmount: val
    }),
    headers: {
        'Content-type': 'application/json'
    },
    })
    .then((res) => res.json())
    .then((newItem) => getIncome())
   }
  
    return (
        <div>
            <h3>Enter your income information here {'(including salary, wages and tips)'}</h3>
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