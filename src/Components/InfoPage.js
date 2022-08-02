import { useState, useEffect } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DailyExpInfo from './Info/DailyExpInfo'
import DebtInfo from './Info/DebtInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'
import IncomeShow from './InfoDisplays/IncomeShow'


const InfoPage = ({ 
    setTotalDailyExp, 
    setDailyExpObj, 
    setIncomeInfoState, 
    setTaxInfoState, 
    taxInfoState, 
    debtInfoState,
    setDebtInfoState,
    investInfoState,
    setInvestInfoState } ) => {

    const [setter, setSetter] = useState(true)
    const [displayItem, setDisplayItem] = useState(0)
    const [category, setCategory] = useState('')

    const showItem = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            return <DailyExpInfo 
            setSetter={setSetter} 
            setTotalDailyExp={setTotalDailyExp} 
            setDailyExpObj={setDailyExpObj} 
            />
        } else if (num === 2) {
            setCategory('income')
            return <IncomeInfo setIncomeInfoState={setIncomeInfoState} />
        } else if (num === 3) {
            return <InvestmentsInfo investInfoState={investInfoState} setInvestInfoState={setInvestInfoState} />
        } else if (num === 4) {
            return <DebtInfo debtInfoState={debtInfoState} setDebtInfoState={setDebtInfoState} />
        } else if (num === 5) {
            return <TaxInfo setTaxInfoState={setTaxInfoState} taxInfoState={taxInfoState} />
        }
    }

    const [info, setInfo] = useState([])

    // const fetchData = async () => {
    //     let req = await fetch('http://localhost:8000/income')
    //     let res = await req.json()
    //     return res
    // }
    // const grabber = async () => {
    //     let data = await fetchData()
    //     console.log(data)
    //     // setInfo(data)
    // }

    // const grabber = (category) => {
    //     fetch(`http://localhost:8000/${category}`)
    //     .then((res) => res.json())
    //     .then((data) => setInfo(data))
    // }

    // const changeCurrent = (num) => {
    //     if (num === 0) {
    //         return
    //     } else if (num === 2) {
    //         fetch('http://localhost:8000/income')
    //         .then((res) => res.json())
    //         .then((data) => setInfo(data))
    //     }
    // }

    // const test = () => (
    //     console.log(category)
    //     // fetch(`http://localhost:8000/${category}`)
    //     //  .then((res) => res.json())
    //     //  .then((data) => console.log(data))
    // )

    // const showCurrent = (info) => {
    //     return <IncomeShow info={info} />
    // }

    return (
        <div>
            <h1>Welcome to the Information Page</h1>

            <div className='info-div'>
                {showItem(displayItem)}
            </div>
            <div className='current-status'>
                <h3>Current Information</h3>
                {/* {test()} */}
                {/* {changeCurrent(displayItem)} */}
                {/* {showCurrent(info)} */}
                {}
            </div>

            <div className='info-buttons'>
                <button onClick={() => setDisplayItem(1)}>Enter your daily expenditures</button>
                <button onClick={() => setDisplayItem(2)}>Enter your income information</button>
                <button onClick={() => setDisplayItem(3)}>Enter your investments information</button>
                <button onClick={() => setDisplayItem(4)}>Enter your debt information</button>
                <button onClick={() => setDisplayItem(5)}>Enter your tax information</button>
            </div>
            
        </div>
    )
}

export default InfoPage





 // useEffect(() => {
            //     const fetchData = async () => {
            //         let req = await fetch('http://localhost:8000/income')
            //         let res = await req.json()
            //         console.log(res)
            //         setInfo(res)
            //         console.log(info)
            //     }
            //     fetchData()
            // }, [] )