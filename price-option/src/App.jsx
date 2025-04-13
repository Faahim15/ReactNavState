
import './App.css'
import Linechart from './components/LineChart/Linechart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {
 

  return (
    <>
      
      <Navbar></Navbar>
      <PriceOptions></PriceOptions> 
      <Linechart></Linechart>
    </>
  )
}

export default App
