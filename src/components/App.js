import React, { useEffect, useState } from 'react'
import CurrencySelector from './CurrencySelector'
import DataDisplay from './DataDisplay'
import {AppContainer, Heading} from './StyledComponents'

const App = () => {
  const defaultCurrency = "AUD"
  const [currency, setCurrency] = useState(defaultCurrency)
  const [bitcoinData, setBitcoinData] = useState({})

  function handleCurrency(event){
      console.log(event.target.value)
      setCurrency(event.target.value)
  }

  const url = "https://api.coindesk.com/v1/bpi/historical/close.json"
  useEffect(() =>{
    console.log("I'm using useEffect!")
    //const data = {"2021-04-26":44733.6535,"2021-04-27":45548.3486,"2021-04-28":45258.7381}
    fetch(`${url}?currency=${currency}`)
      .then(response => response.json())
      .then(data => setBitcoinData(data.bpi) )
      .catch(e=> console.log(e))
    
  },[currency])

  return (
    <AppContainer >
          <Heading>Bitcoin Index</Heading>
          <CurrencySelector currency={currency} handleCurrency={handleCurrency}/>
          <DataDisplay bitcoinData={bitcoinData}/>
    </AppContainer>
  )
}

export default App
