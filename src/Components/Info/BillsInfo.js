const BillsInfo = ({
    getBills
}) => {
    const handleBillSubmit = (e) => {
        e.preventDefault()
        let type = e.target[0].value
        let amount = parseFloat(e.target[1].value)

        fetch('http://localhost:8000/bills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                billType: type,
                monthlyAmount: amount,
            })
        })
            .then((res) => res.json())
            .then((newItem) => getBills())

    }

    return (
        <div>
            <h3>Enter your monthly bills here</h3>
            <form onSubmit={handleBillSubmit}>
                <input type='text' placeholder='Bill description' />
                <br />
                <input type='text' placeholder='Monthly Amount' />
                <label> dollars </label>
                <br />
                <input type='submit' />
            </form>
        </div>
    )
}

export default BillsInfo