import React from 'react'
import { useSelector } from 'react-redux'

const Clients = () => {

  const {bodyColor, textColor} = useSelector((state)=> state.accessibility)

  return (
    <div style={{background: bodyColor, color: textColor}} className={`w-full md:h-screen p-2 flex items-center py-16`}>
      Clients
    </div>
  )
}

export default Clients