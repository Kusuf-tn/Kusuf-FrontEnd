import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ to, children, className: style, onClick }) => {
  return (
    <Link to={to}>
      <button className={`bg-primary  font-bold py-2 px-4 rounded ${style}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  )
}

export default Button
