import React from 'react'
import { useSelector } from 'react-redux'


export const ColorBody = () => {

    const {bodyColor} = useSelector((state)=> state.accessibility);

  return (
    <div className={bodyColor}></div>
  )
}
