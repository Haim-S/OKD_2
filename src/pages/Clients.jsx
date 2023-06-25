import React from 'react'
import { useSelector } from 'react-redux'

const Clients = () => {

  const {bodyColor} = useSelector((state)=> state.accessibility)

  return (
    <div style={{background: bodyColor}} className={`w-full md:h-screen p-2 flex items-center py-16`}>
      Clients
    </div>
  )
}

export default Clients