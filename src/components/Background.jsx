import React from 'react'
import bg from '../assets/3afak.svg'

function Background() {
  return (
    <>
        <img src={bg} className="fixed -z-10 top-0 left-0 rotate-180 h-[400px] opacity-30 p-1" />
        <img src={bg} className="fixed -z-10 bottom-0 left-0 rotate-180 h-[400px] opacity-20 p-1" />
        <img src={bg} className="fixed -z-10 top-0 right-0 h-[400px] opacity-20 p-1" />
        <img src={bg} className="fixed -z-10 bottom-0 right-0 h-[400px] opacity-30 p-1" />
    </>
  )
}

export default Background