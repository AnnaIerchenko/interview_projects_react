import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'

const ImgSlider = ({url, limit = 5, page = 1}) => {
  const [images, setImages] = useState([])
  const [curSlide, setCurSlide] = useState(0)
  const [errorMsg, setErrMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImg(getUrl) {
    try{
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()
      if(data){
        setImages(data)
        setLoading(false)
      }
    }catch(e){
      setErrMsg(e.message)
      setLoading(false)
    }
  }

  const handlePrevios = () => {
    setCurSlide(curSlide === 0 ? images.length - 1 : curSlide - 1)
  }
  const handleNext = () => {
    setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1)
  }
  useEffect(() => {
    if(url !== '') fetchImg(url)
  }, [url])

  console.log(images)
  if(loading) {
    return <div>Loading data.....! please wait!</div>
  }
  if(errorMsg !== null){
    return <div>Error occured! {errorMsg}</div>
  }
  return (
    <div className='container'>
      <BsArrowLeftCircleFill 
        className='arrow arrow-left' 
        onClick={handlePrevios}
        />
      {
        images && images.length ?
        images.map((imgItem, ind) => (          
          <img 
            key={imgItem.id}
            alt={imgItem.download_url}
            src={imgItem.download_url}
            className={
              curSlide === ind 
              ? 'cur-img' 
              : 'cur-img hide-cur-img'
            }
          />  
        ))
        : null
      }
      <BsArrowRightCircleFill 
        onClick={handleNext}
        className="arrow arrow-right" />
      <span className='circle-indicators'>
        {
          images && images.length ? 
          images.map((_, ind) => (
          <button 
            key={ind} 
            className={
            curSlide === ind 
            ? 'current-indicator'
            : 'current-indicator inactive-indicator'
          }
            onClick={() => setCurSlide(ind)}
          ></button>))
           : null
        }
      </span>
    </div>
  )
}

export default ImgSlider