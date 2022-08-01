const IncomeInfo = ({ setIncome }) => {
   const handleSubmit = (e) => {
    e.preventDefault()
    setIncome(e.target[0].value)
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