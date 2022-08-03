import { useState, useEffect } from 'react'
import TaxInfo from './Info/TaxInfo'
import IncomeInfo from './Info/IncomeInfo'
import DailyExpInfo from './Info/DailyExpInfo'
import DebtInfo from './Info/DebtInfo'
import BillsInfo from './Info/BillsInfo'
import InvestmentsInfo from './Info/InvestmentsInfo'
import DailyShow from './InfoDisplays/DailyShow'
import InvestmentsShow from './InfoDisplays/InvestmentsShow'
import DebtsShow from './InfoDisplays/DebtsShow'
import BillsShow from './InfoDisplays/BillsShow'
import IncomeShow from './InfoDisplays/IncomeShow'


const InfoPage = ({ 
    newSpending,
    setNewSpending,
    prevSpending,
    setPrevSpending,
    newIncome,
    prevIncome,
    setPrevIncome,
    setNewIncome,
    newTaxes,
    setNewTaxes,
    prevTaxes,
    setPrevTaxes,
    newDebts,
    setNewDebts,
    prevDebts,
    setPrevDebts,
    newInvestments,
    setNewInvestments,
    prevInvestments,
    setPrevInvestments,
    newBills,
    setNewBills,
    prevBills,
    setPrevBills,
    newTotals,
    setNewTotals,
    prevTotals,
    setPrevTotals,
     } ) => {

    const [displayItem, setDisplayItem] = useState(0)
    const reloadPage = () => {
        window.location.reload(false)
    }
    let cat = ''

    const showItem = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            cat = 'Daily'
            return <DailyExpInfo 
                newSpending={newSpending}
                setNewSpending={setNewSpending}
                prevSpending={prevSpending}
                setPrevSpending={setPrevSpending}
            />
        } else if (num === 2) {
            cat = 'income'
            return <IncomeInfo 
                newIncome={newIncome}
                setNewIncome={setNewIncome}
                prevIncome={prevIncome}
                setPrevIncome={setPrevIncome}
            />
        } else if (num === 3) {
            cat = 'investments'
            return <InvestmentsInfo 
                newInvestments={newInvestments}
                setNewInvestments={setNewInvestments}
                prevInvestments={prevInvestments}
                setPrevInvestments={setPrevInvestments}
            />
        } else if (num === 4) {
            cat = 'debt'
            return <DebtInfo 
                newDebts={newDebts}
                setNewDebts={setNewDebts}
                prevDebts={prevDebts}
                setPrevDebts={setPrevDebts}
            />
        } else if (num === 5) {
            cat = 'taxes'
            return <TaxInfo 
                newTaxes={newTaxes}
                setNewTaxes={setNewTaxes}
                prevTaxes={prevTaxes}
                setPrevTaxes={setPrevTaxes}
            />
        } else if (num === 6) {
            cat = 'bills'
            return <BillsInfo
               newBills={newBills}
               setNewBills={setNewBills}
               prevBills={prevBills}
               setPrevBills={setPrevBills}
                />
        }
    }

    const displayValues = (num) => {
        if (num === 0) {
            return
        } else if (num === 1) {
            cat = 'Daily'
            let a = 0


            let spendingArray = [...prevSpending, ...newSpending]
            // console.log('Spending Array: ', spendingArray)
            return (
                <div>
                    <h5>(Click to delete)</h5>
                    <ol>
                        {spendingArray.map((item) => {
                            return (<DailyShow 
                                        id={item.id} 
                                        key={a++} 
                                        item={item}
                                        // setMoneyInArray={setMoneyInArray}
                                         />)
                        })}
                    </ol>
                </div>
            )
        } else if (num === 2) {
            cat = 'income'
            let e = 0
            let incomeArray = [...prevIncome, ...newIncome]
            console.log('Income Array: ', incomeArray)
            return (
                <div>
                    <ol>
                        {incomeArray.map((item) => {
                            return (<IncomeShow
                                item={item}
                                key={e++}
                                id={item.id}
                            />)
                        })}
                    </ol>
                </div>
            )
        } else if (num === 3) {
            cat = 'investments'
            let b = 0
            let passiveIncomeArray = [...prevInvestments, ...newInvestments]
            console.log('Investments: ', passiveIncomeArray)
            return (
                <div>
                    <ol>
                        {passiveIncomeArray.map((item) => {
                            return (<InvestmentsShow
                                    item={item}
                                    key={b++}
                                    id={item.id}
                                         />)
                        })}
                    </ol>
                </div>
            )
        } else if (num === 4) {
            cat = 'debt'
            let c = 0
            let moneyOwedArray = [...prevDebts, ...newDebts]
            console.log('Debts: ', moneyOwedArray)
            return (
                <div>
                    <ol>
                        {moneyOwedArray.map((item) => {
                            return (
                                <DebtsShow 
                                item={item}
                                id={item.id}
                                key={c++}
                                 />
                            )
                        })}
                    </ol>
                </div>
            )
        } else if (num === 5) {
            cat = 'taxes'
            let taxSpecifics = prevTaxes
            console.log('Tax Information: ', taxSpecifics)
            return (
                <div>
                    <p>{`Relationship Status:   ${taxSpecifics.relStatus}`}</p>
                    <p>{`Number of Dependents: ${taxSpecifics.dependents}`}</p>
                </div>
            )
        } else if (num === 6) {
            cat = 'bills'
            let d = 0
            let billsArray = [...prevBills, ...newBills]
            return (
                <div>
                    <ol>
                        {billsArray.map((item) => {
                            return (
                                <BillsShow 
                                item={item}
                                id={item.id}
                                key={d++}
                                reloadPage={reloadPage}
                                 />
                            )
                        })}
                    </ol>
                </div>
            )
        }
    }
    
    return (
        <div>
            <h1>Welcome to the Information Page</h1>
            <div className='info-div'>
                {showItem(displayItem)}
            </div>
            <div className='current-status'>
                <h3>Current Information</h3>
                {displayValues(displayItem)}
            </div>

            <div className='info-buttons'>
                <button onClick={() => setDisplayItem(1)}>Enter your daily expenditures</button>
                <button onClick={() => setDisplayItem(2)}>Enter your income information</button>
                <button onClick={() => setDisplayItem(3)}>Enter your investments information</button>
                <button onClick={() => setDisplayItem(4)}>Enter your debt information</button>
                <button onClick={() => setDisplayItem(5)}>Enter your tax information</button>
                <button onClick={() => setDisplayItem(6)}>Enter your bills</button>
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