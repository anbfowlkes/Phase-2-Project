import { useState } from 'react'
import DEICard from './DEICard'

let c = 0

const DailyExpInfo = ({ setSetter, setTotalDailyExp } ) => {

    const [DEIArray, setDEIArray] = useState([1])

    const handleDEIClick = () => {
        console.log('clicked')
        // setSetter((prev) => !prev)
        return <DEICard setSetter={setSetter} />
    }

    return (
        <div>
            <h3>Enter your daily expenditures here</h3>
            {DEIArray.map((item) => {
                return <DEICard DEIArray={DEIArray} setDEIArray={setDEIArray} key={c++} setTotalDailyExp = {setTotalDailyExp} />
            })}

            {/* <DEICard setSetter={setSetter} />
            <button onClick={handleDEIClick}>Add a daily expenditure</button> */}
            
        </div>
    )
}

export default DailyExpInfo