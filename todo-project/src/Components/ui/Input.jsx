import React from 'react'

export default function Input({ value, onChange, placeholder, onKeyDown }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown} 
      placeholder={placeholder}
      required
      className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  )
}
