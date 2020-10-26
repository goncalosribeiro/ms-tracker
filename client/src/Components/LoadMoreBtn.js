import React, { useContext } from 'react'
import { Context } from '../store/store'
import './LoadMoreBtn.css'

const LoadMoreBtn = () => {
  const [state, dispatch] = useContext(Context);

  const clickLoadMore = () => {
    dispatch({ type: "LOAD_MORE", payload: true });
  }

  return (
    <div className="rmdb-loadmorebtn" onClick={clickLoadMore}>
      <p>Load More</p>
    </div>
  )
}

export default LoadMoreBtn
