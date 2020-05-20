import React from 'react'

function ToggleButton ({ isOn=false, onClick=()=>{}, color="#B2B2B2", size=48 }) {
  return (
    <svg onClick={onClick} className={`toggle-button ${isOn ? 'on' : 'off'}`} color="#B2B2B2" width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path className="outer" d="M32 10H16C8.26801 10 2 16.268 2 24C2 31.732 8.26801 38 16 38H32C39.732 38 46 31.732 46 24C46 16.268 39.732 10 32 10Z" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="inner" d="M16 30C19.3137 30 22 27.3137 22 24C22 20.6863 19.3137 18 16 18C12.6863 18 10 20.6863 10 24C10 27.3137 12.6863 30 16 30Z" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ToggleButton
