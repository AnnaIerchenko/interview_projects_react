import React, { useRef } from 'react'

const ScrollToSection = () => {
  const ref = useRef()
const data = [
  {
    label: 'First Card',
    style: {
      width: '100%',
      height: '500px',
      backgroundColor: 'red',
    }
  },
  {
    label: 'Second Card',
    style: {
      width: '100%',
      height: '500px',
      backgroundColor: 'gray',
    }
  },
  {
    label: 'Third Card',
    style: {
      width: '100%',
      height: '500px',
      backgroundColor: 'blue',
    }
  },
  {
    label: 'Fourth Card',
    style: {
      width: '100%',
      height: '500px',
      backgroundColor: 'aqua',
    }
  },
  {
    label: 'Fifth Card',
    style: {
      width: '100%',
      height: '500px',
      backgroundColor: 'orange',
    }
  },
]
const handleScrollToSection = () => {
  let pos = ref.current.getBoundingClientRect().top
  window.scrollTo({
    top: pos,
    behavior: 'smooth'
  })

}
  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {
        data.map((dataItem, index) => (
          <div ref={index === 3 ? ref : null} style={dataItem.style}>
            <h3>{dataItem.label}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default ScrollToSection