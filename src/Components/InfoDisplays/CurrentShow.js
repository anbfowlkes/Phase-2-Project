import { useState, useEffect } from 'react'

const CurrentShow = ( {cat} ) => {

    const [data, setData] = useState({})
    console.log('Category: ', cat)

    

    useEffect (() => {
        const getData = async () => {
            let req = await fetch(`http://localhost:8000/${cat}`)
            let res = await req.json()
            console.log(res)
            setData(res)
        }
        getData()
    }, [])

    return (
        <div>
            {console.log(data)}
            <h4>Current Info</h4>
            
        </div>
    )
}

export default CurrentShow