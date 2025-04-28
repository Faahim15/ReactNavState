

import { createContext } from 'react'
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
export const AssetContext = createContext();
function App() {
  
  return (
    <div className='border' >
      <AssetContext.Provider value='gold' >
      <Grandpa></Grandpa>
      </AssetContext.Provider>
      
    </div>
  )
}

export default App
