import React from 'react';

const CastingCall = () => {
  // Sample data for casting calls
  const castingCalls = [
    {
      id: 1,
      title: "The Next Short Film",
      director: "James Geldt",
      description: "We're looking for talented actors for our upcoming short film. Auditions will be held next week.",
      location: "Islamabad",
      type: "Short Film",
      duration: "25 Days",
      budget: "$20K"
    },
    {
      id: 2,
      title: "Urban Drama Series",
      director: "Sarah Johnson",
      description: "Casting for a new urban drama series shooting this fall. Diverse cast needed.",
      location: "Lahore",
      type: "TV Series",
      duration: "3 Months",
      budget: "$150K"
    },
    {
      id: 3,
      title: "Historical Documentary",
      director: "Michael Chen",
      description: "Seeking narrators and reenactment actors for a historical documentary series.",
      location: "Karachi",
      type: "Documentary",
      duration: "6 Weeks",
      budget: "$75K"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f3f5f5] from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-start mb-12">
          <h1 className="text-4xl pl-[30px] font-bold text-black mb-4 ">Find The Right Casting Call</h1>
          <p className=" text-black-200 pl-[30px] mx-auto">
            Find the latest casting calls and apply for the roles that match your skills.
          </p>
        </div>

        {/* Casting Call Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {castingCalls.map((call) => (
            <div key={call.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              {/* Card Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black">{call.title}</h3>
                    <p className="text-gray-400">by <span className='text-black'>{call.director}</span></p>
                  </div>
                  {/* <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span> */}
                </div>
                <p className="text-black-200 mt-4">{call.description}</p>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <div className="grid grid-cols-2  gap-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium text-black-100">{call.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Type</p>
                      <p className="text-sm font-medium text-black">{call.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium text-black">{call.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500">Budget</p>
                      <p className="text-sm font-medium text-black">{call.budget}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <button className="bg-black hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-[10px] transition duration-300 flex items-center">
                    Apply Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  {/* <button className="text-gray-400 hover:text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center">
                    Discover More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="mt-12 lg:text-start text-center ">
          <button className="px-6 py-3 ml-[8px] border border-black rounded-full hover:bg-black hover:text-white transition">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CastingCall;