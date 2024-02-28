import React, { useState } from 'react'
import data from './data'
import './style.css'

//single selection
//multiple selection

const Accordeon = () => {
  const [selected, setSelected] = useState(null)
  const [enableMulltiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (getCurId) => {
    setSelected(getCurId === selected ? null : getCurId)
  }
  const handleMultiSelection = (getCurId) => {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurId)
    console.log(findIndexOfCurrentId)
    if(findIndexOfCurrentId === -1) copyMultiple.push(getCurId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)
    setMultiple(copyMultiple)
  }
  console.log(selected, multiple)
  return (
    <div className='wrapper'>
      <button 
        onClick={() => setEnableMultiSelection(!enableMulltiSelection)} 
        className='button'>Multi selection</button>
      <div className="accordeon">
        {
          data && data.length > 0 ? (
            data.map((item) => (
          <div className='item'>
            <div 
              className="title"
              onClick={
                enableMulltiSelection
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
              }
              >
              <h3>{item.question}</h3>
              { multiple.indexOf(item.id) !== -1 ||
                selected === item.id ? 
                <span>-</span> : 
                <span>+</span>}
              </div>
              {
                selected === item.id || 
                multiple.indexOf(item.id) !== -1 ? 
                (<div 
                  className='content'>
                    {item.answer}
                </div>)
                : null
              }
          </div>)))
          : <div>No data fount</div>
        }
      </div>
    </div>
  )
}

export default Accordeon