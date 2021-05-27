import React from 'react'
import currencies from '../data/supported-currencies.json'
import {SelectHeading, SelectContainer} from './StyledComponents'

const CurrencySelector = ({currency, handleCurrency})=>{
    return(
        <SelectContainer>
            <SelectHeading>Select your currency: </SelectHeading>
            <select value={currency} onChange={handleCurrency}>
                {currencies.map((obj)=>
                <option key={obj.currency} value={obj.currency}>{obj.country}</option>
                )}
            </select>
        </SelectContainer>
    )
}

export default CurrencySelector