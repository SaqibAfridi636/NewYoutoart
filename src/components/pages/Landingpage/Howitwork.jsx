import React from 'react'
import Howworkimage from '../../../assets/images/Howworkimage.png'
const Howitwork = () => {
    return (
        <section className='bg-white'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center">

                {/* left content */}
                <div className="w-full md:w-1/2  h-[100vh] text-center md:text-left">
                    <div className='mt-[70px]'>
                        <h1 className='text-6xl pl-[35px]'>How It Works</h1>
                        <img src={Howworkimage} alt=""/>
                    </div>
                </div>
                {/* Right content */}
                <div className="w-full md:w-1/2  flex justify-center mb-8 md:mb-0">
                    <div>
                        <h1 className='text-[32px]'>Craft Your Identity, Share Your Passion.</h1>
                        <p>Your artistic journey begins with YouTooArt's personlized profile</p>
                        <hr className='mt-[10px]' />
                        <h1 className='text-[32px]'>Discover, Apply, Shine.</h1>
                        <p>Unlock a word of opportunities through YouTooArt's diverse casting calls From indie projects to collaborations with ren</p>
                        <hr className='mt-[10px]' />
                        <h1 className='text-[32px]'>Connect, Collaborate, create.</h1>
                        <p>YouTooArt revolutionizes, artistic collaboration with powerful tools, Seamlessly connect with fellow artist, discuss projects</p>
                        <button className="px-6 py-3 mt-[15px] bg-white text-black rounded-lg shadow hover:bg-gray-800">
                            Get Started
                        </button>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Howitwork
