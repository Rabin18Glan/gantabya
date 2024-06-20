import React from 'react'

interface PhotoCardProps{
    image:'string'
}

function PhotoCard({image}:PhotoCardProps) {
  return (
    <div className={`bg-[url('${image}')] h-auto w-auto bg-no-repeat`}></div>
  )
}

export default PhotoCard