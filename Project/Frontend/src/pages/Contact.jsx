import React from 'react'
import { Link } from 'react-router'

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
    <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
        Contact Us
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        🚧 We are in making... 🚀
        <br />
        Our Contact Page is under construction. <br />
        Stay tuned for something amazing!
      </p>
      <Link to="/"><button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        Go Back Home
      </button></Link>
    </div>
  </div>
  )
}

export default Contact
