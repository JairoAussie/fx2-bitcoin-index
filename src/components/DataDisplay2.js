import React from 'react'

const DataDisplay = ({bitcoinData})=>{
    return(
        <div>
            {Object.keys(bitcoinData).map(date=>
                <div key={date}>Date: {date} Value: {bitcoinData[date]} </div>
            )}
        </div>
    )
}

export default DataDisplay