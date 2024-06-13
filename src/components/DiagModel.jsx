import React from 'react'

const DiagModel = () => {
  return (
    <div>
      <div className="fixed top-0 w-full px-[10%] bg-white pt-2">
      <h1 className='text-3xl font-bold text-blue-600 justify-center items-center flex'>Diagnosis Analysis</h1>
      <hr className='my-4 border-black/[0.5]'/></div>
      <a href="https://ai-medical-analysis.streamlit.app/">
        <h1 className='flex flex-col items-center justify-center min-h-screen text-2xl text-blue-500
        font-bold'>Diagnosis Model</h1>
        </a>
    </div>
  )
}

export default DiagModel