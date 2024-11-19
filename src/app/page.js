"use client";


import Image from "next/image";
import { MdOutlineExitToApp } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { useState } from 'react';

// Job listings data
const jobListings = [
  {
    id: 1,
    company: "META Company",
    logo: "/meta-logo.png",
    position: "Product Design",
    location: "Porto, Portugal",
    locationType: "(On site)",
    isEasyApply: true,
    isMultipleCandidate: true,
    timePosted: "1d"
  },
  {
    id: 2,
    company: "NAJMA Company",
    logo: "/najma-logo.png",
    position: "UI/UX Designer",
    location: "Porto, Portugal",
    locationType: "(On Site)",
    isEasyApply: true,
    isMultipleCandidate: true,
    timePosted: "2d"
  },
  {
    id: 3,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 4,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 5,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 6,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 7,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 8,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  {
    id: 9,
    company: "MOHI Company",
    logo: "/mohi-logo.png",
    position: "Game Designer",
    location: "Rome, Italy",
    locationType: "(On Site)",
    isEasyApply: false,
    isMultipleCandidate: true,
    timePosted: "3d"
  },
  // Add more job listings as needed
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 6;
  const totalSlides = Math.ceil(jobListings.length / cardsPerSlide);

  // Function to get current slide's job listings
  const getCurrentSlideJobs = () => {
    const startIndex = currentSlide * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;
    return jobListings.slice(startIndex, endIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

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

      {/* Exclusive Offers Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Exclusive Offers</h2>
          <div className="flex gap-2">
            <button onClick={prevSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Job Cards Container */}
        <div className="overflow-hidden relative w-full">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                  {jobListings
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((job) => (
                      <div 
                        key={job.id} 
                        className="bg-white p-6 rounded-lg border border-gray-100 relative h-full"
                      >
                        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                        
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                              src={job.logo} 
                              alt={job.company} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{job.company}</h3>
                          </div>
                        </div>

                        <h2 className="text-xl font-bold mb-2">{job.position}</h2>
                        <p className="text-gray-600 mb-4">{job.location} {job.locationType}</p>

                        <div className="flex items-center gap-3 flex-wrap">
                          {job.isEasyApply && (
                            <button className="px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm whitespace-nowrap">
                              Easy Apply
                            </button>
                          )}
                          {job.isMultipleCandidate && (
                            <span className="text-gray-500 text-sm whitespace-nowrap">Multiple Candidate</span>
                          )}
                          <span className="ml-auto text-gray-400 text-sm">{job.timePosted}</span>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
