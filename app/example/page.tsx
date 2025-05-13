import React from 'react'

const Example = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-6 border border-[#D9D9D9]">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-[#1E1E1E] text-base font-normal">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Value"
            className="w-full px-4 py-3 border border-[#D9D9D9] rounded-lg text-base placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="px-3 py-3 rounded-lg text-[#303030] text-base font-normal hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            className="px-3 py-3 rounded-lg bg-[#2C2C2C] text-[#F5F5F5] text-base font-normal border border-[#2C2C2C] hover:bg-[#1E1E1E] transition-colors"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example;