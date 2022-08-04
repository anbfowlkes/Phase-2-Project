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
        <div className='income-form'>
            <div id='income-header'>
                <h3 id='h3'>Enter your income information here:</h3>
                <p>{'(including salary, wages, and tips)'}</p>
            </div>
            <div className='form-containing'>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Income Source' />
                    <br />
                    <input type='text' placeholder='Amount'/>
                    <br />
                    <input id='income-submit' type='submit' value='Submit' />
            </form>
            </div>
        </div>
    )
}

export default IncomeInfo