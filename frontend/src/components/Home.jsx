import React from 'react'
const Home = () => {
  return (
    <div>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-md w-full transition transform duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-6">Track your expenses easily and efficiently.</p>
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
          onClick={() => alert("Expense Tracker Created!")}
        >
          Create Expense Tracker
        </button>
      </div>
    </div>
      
    </div>
  )
}

export default Home
