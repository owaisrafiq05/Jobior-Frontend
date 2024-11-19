import Image from "next/image";
import { MdOutlineExitToApp } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";



export default function Home() {
  return (
    <div className="min-h-screen py-4 flex flex-col items-center bg-white">
      {/* Navigation */}
      <nav className="w-full max-w-7xl flex justify-between items-center mb-2">
        <div className="text-3xl font-bold text-[#00FF7F]">
          <img src="./Jobior.png" alt="Jobior" className="w-28"></img>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-black text-4xl flex items-center gap-2 border-r-2 border-gray-200 pr-4"><CiCircleQuestion /></button> 
          <button className="text-gray-600 text-lg border-r-2 border-gray-200 pr-4">Employers</button>
          <button className="bg-black text-white px-4 py-2 rounded-full text-lg flex items-center gap-2">
            <MdOutlineExitToApp />
            Sign Up</button>
        </div>
      </nav>

      {/* Main navigation */}
      <div className="flex gap-8 mb-16 w-[100%] justify-center border-y-2 border-gray-200 py-4 px-0 ">
        {['Jobs', 'Companies', 'Create CV'].map((item) => (
          <button key={item} className="text-gray-600 hover:text-black font-bold text-xl">
            {item}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-8 text-black">Start Your Job Journey</h1>
        
        {/* Search Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 relative">
          {/* Position Search */}
          <div className="relative flex-1 group">
            <input
              type="search"
              placeholder="Junior / Intern Position"
              className="w-full h-[50px] pl-5 pr-12 rounded-full border-2 border-gray-100 
                         focus:border-[#07051a] outline-none transition-all duration-300
                         text-gray-600 text-sm bg-white"
              required
            />
            <i className="fas fa-briefcase absolute right-4 top-1/2 -translate-y-1/2 
                          text-gray-400 group-focus-within:text-[#07051a] transition-colors duration-300"></i>
          </div>

          {/* Location Search */}
          <div className="relative flex-1 group">
            <input
              type="search"
              placeholder="Location"
              className="w-full h-[50px] pl-5 pr-12 rounded-full border-2 border-gray-100 
                         focus:border-[#07051a] outline-none transition-all duration-300
                         text-gray-600 text-sm bg-white"
              required
            />
            <i className="fas fa-map-marker-alt absolute right-4 top-1/2 -translate-y-1/2 
                          text-gray-400 group-focus-within:text-[#07051a] transition-colors duration-300"></i>
          </div>

          {/* Search Button */}
          <button className="bg-[#07051a] hover:bg-[#07051a]/90 text-white px-8 py-4 
                             rounded-full min-w-[50px] transition-colors duration-300
                             flex items-center justify-center">
            <i className="fas fa-search text-lg"></i>
          </button>
        </div>

        {/* Employer Link */}
        <p className="text-sm text-gray-500 mb-8 font-bold">
          Employers? <a href="#" className="text-purple-600 font-bold">Post your job here</a>
        </p>

        {/* Job Categories */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
            Easy Apply
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm text-black font-bold">
            Part-Time
          </button>
          {[
            'Customer Service',
            'Data Analyst',
            'Delivery Driver',
            'Engineering',
            'Marketing',
            'Nurse',
            'Medical',
            'Project Manager',
            'Sales',
            'Warehouse',
            'Welder',
            'IT'
          ].map((category) => (
            <button
              key={category}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm hover:bg-gray-200 text-black font-bold"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
