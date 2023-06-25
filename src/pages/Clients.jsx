import React from 'react'
import { useSelector } from 'react-redux'

const Clients = () => {

  const {bodyColor} = useSelector((state)=> state.accessibility)

  return (
    <div className={`w-full md:h-screen p-2 flex items-center py-16 ${bodyColor}`}>
      Clients
    </div>
  )
}

export default Clients