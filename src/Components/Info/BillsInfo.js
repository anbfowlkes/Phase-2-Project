import '../Styles/BillsInfo.css'

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
        <div className='bills-div'>
            <div className='top'>
                <h3>Enter your monthly bills here</h3>
            </div>
            <form onSubmit={handleBillSubmit}>
                <input type='text' placeholder='Bill Description' />
                <br />
                <input type='text' placeholder='Monthly Amount (in dollars)' />
                <br />
                <input id='bills-submit' type='submit' />
            </form>
        </div>
    )
}

export default BillsInfo