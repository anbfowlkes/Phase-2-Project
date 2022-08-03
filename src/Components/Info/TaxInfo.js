import { useEffect } from "react"

const TaxInfo = ({
  newTaxes,
  setNewTaxes,
  prevTaxes,
  setPrevTaxes
}) => {


  const handleTaxSubmit = (e) => {
    e.preventDefault()
    let val1 = e.target[0].value
    let val2 = parseFloat(e.target[1].value)
    fetch('http://localhost:8000/taxes', {
      method: 'PATCH',
      body: JSON.stringify({
        relStatus: val1,
        dependents: val2
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    setPrevTaxes({ relStatus: val1, dependents: val2 })
  }

  return (
    <div className='tax-form'>
      <h3>Enter your tax information here</h3>
      <form onSubmit={handleTaxSubmit}>
        <label htmlFor="status">What is your relationship status? </label>
        <select name="status">
          <option>Choose one of the following:</option>
          <option>Single</option>
          <option>Married - filing separately</option>
          <option>Married - filing jointly</option>
          <option>Head of Household</option>
        </select>
        <br />
        <label htmlFor="dependents">How many dependents can you claim? </label>
        <select name="dependents">
          <option>Choose one of the following:</option>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <input type='submit' />
      </form>
    </div>
  )
}

export default TaxInfo