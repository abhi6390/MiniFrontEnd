import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="fixed top-0 w-full px-[10%] bg-white pt-2">
        <h1 className='text-3xl font-bold text-blue-600 justify-center items-center flex'>Diet and Health Diagnostic App</h1>
        <hr className='my-4 border-black/[0.5]'/>
      </div>

      <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="bg-gray-200 rounded-lg p-10 mb-8 m-10">
          <Link to="/DiagModel" class="block text-xl mb-4 font-bold text-blue-500">Diagnosis Model</Link>
          <Link to="/CalModel" class="block text-xl mb-4 font-bold text-blue-500">Calories Model</Link>
          <Link to="/DietPlanner" class="block text-xl font-bold text-blue-500">Diet Planner</Link>
        </div>
      </div>

    </>
  );
};

export default Home;
