import {useEffect,useState} from 'react'

const useCurrency = (currency) => {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then(data=>data.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data)

    return(data,setData)
  
}

export default useCurrency