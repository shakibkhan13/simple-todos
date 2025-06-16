import React from 'react'

export default function Button({ label, onClick, className = '', children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all ${className}`}
    >
      {children || label}
    </button>
  )
}
