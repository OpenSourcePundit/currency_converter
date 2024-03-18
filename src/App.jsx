
import './App.css'
import useCurrency from './hooks/useCurrency'

function App() {

  const {data,setData} = useCurrency('usd')
  return (
    <>
     <h1 className="text-3xl bg-orange-500">Hello Shashank usd</h1>

     

    </>
  )
}

export default App
