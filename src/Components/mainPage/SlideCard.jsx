import React from 'react'
import bags from '../../assets/bags.png'

export default function SlideCard() {

  return (
    <>
    <div className="box d_flex top">
      <div className="left">
        <h1>50% Off For Your First Shopping</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum velit aliquam possimus explicabo exercitationem autem doloribus et!</p>
        <button className='btn btn-visit my-3'>Visit Collections</button>

      </div>
      <div className="right">
        <img src={bags} alt="shoppin bags" />
      </div>
    </div>
    </>
  )
}
