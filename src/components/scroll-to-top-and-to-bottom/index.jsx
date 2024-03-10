import React, { useRef } from 'react'
import useFetch from '../use-fetch'

const ScrollToTopAndBottom = () => {
  const bottomRef = useRef(null)
  const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=100", {})
  if(error){
    return <h1>Error occured ! please try again</h1>
  }
  if(pending){
    return <h1>Loading !please wait</h1>
  }
 
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div>
      <h1>Scroll To Top And Bottom</h1>
      <h3>This is top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{listStyle: 'none'}}>
        {
          data && data.products && data.products.length ? data.products.map((item) => (
            <li>{item.title}</li>
          )) : null
        }
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>Bottom of the page</h3>
    </div>
  )
}

export default ScrollToTopAndBottom