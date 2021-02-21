import React from 'react'

const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName}</h1>
        <p>당신의 여행지를 공유해보세요.</p>
      </div>
    </div>
  )
}

export default Banner
