import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* <div className="fixed top-0 w-full px-[10%] bg-white pt-2">
        <h1 className='text-3xl font-bold text-blue-600 justify-center items-center flex'>Diet and Health Diagnostic App</h1>
        <hr className='my-4 border-black/[0.5]'/>
      </div>

      <div class="flex flex-col items-center justify-center min-h-screen">
        <div class="bg-gray-200 rounded-lg p-10 mb-8 m-10">
          <Link to="/DiagModel" class="block text-xl mb-4 font-bold text-blue-500">Diagnosis Model</Link>
          <Link to="/CalModel" class="block text-xl mb-4 font-bold text-blue-500">Calories Model</Link>
          <Link to="/DietPlanner" class="block text-xl font-bold text-blue-500">Diet Planner</Link>
        </div>
      </div> */}


        <NavBar/>
      
    <div className='flex flex-wrap justify-around px-4 bg-slate-200'>

    <div className="w-[300px] rounded-lg  my-4 bg-blue-400 border-2 border-blue-800 ">
      <img
        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/diagnosis-5-248419.png"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover bg-black"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Diagnosis Model</h1>
        <p className="mt-3 text-sm  ">
          Explore our AI-powered diagnostic tool to identify medical conditions accurately
        </p>
        <a href="https://ai-medical-analysis.streamlit.app"  target='blank'>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-black px-3 my-2 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          Try now 
        </button>
        </a>
      </div>
    </div>
      

    <div className="w-[300px] rounded-lg  my-4 bg-blue-400 border-2 border-blue-800 ">
      <img
        src="https://previews.123rf.com/images/lkeskinen/lkeskinen1709/lkeskinen170913357/86850708-diet-plan-rubber-stamp.jpg"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Diet Planner</h1>
        <p className="mt-3 text-sm  ">
          Unveil our AI-powered diet planner for personalized nutrition and meal planning
        </p>
        <a href="" target='blank'>
       <button
          type="button"
          className="inline-flex items-center rounded-md bg-black px-3 my-2 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          Try now 
        </button>
        </a>
      </div>
    </div>


    <div className="w-[300px] rounded-lg  my-4 bg-blue-400 border-2 border-blue-800 ">
      <img
        src="https://icon-library.com/images/kcal-icon/kcal-icon-5.jpg"
        alt="Laptop"
        className="h-[200px] w-full rounded-md bg-black object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Calories Model</h1>
        <p className="mt-3 text-sm  ">
          Discover our AI-driven tool for accurate calorie tracking and nutritional insights
        </p>
        <a href="https://calories-count-ai.streamlit.app" target='blank'>
       <button
          type="button"
          className="inline-flex items-center rounded-md bg-black px-3 my-2 py-2 text-sm font-semibold text-white hover:bg-black/80"
        >
          Try now 
        </button>
        </a>
      </div>
    </div>



    

    </div>


    {/* <Footer/> */}

    </>
  );
};

export default Home;
