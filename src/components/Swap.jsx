import React from 'react'

function Swap({ onSwap }) {
  return (
    <div className="relative w-full h-0.5">
      <button
        type="button"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 text-sm font-semibold shadow-md active:scale-95 transition-all hover:bg-blue-700 cursor-pointer"
        onClick={onSwap}
      >
        swap
      </button>
    </div>
  )
}

export default Swap