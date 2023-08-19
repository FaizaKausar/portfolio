import React from 'react'
import {AiOutlineCheckSquare} from "react-icons/ai"
const Skills = () => {
  return (
    <div id='Skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
        {/*skills*/}


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className='font-bold text-2xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                <div className='absolute w-[100%] rounded-xl h-1 bg-blue-500'>

                </div>
                <p className='font-bold text-blue-500 text-right'>100%</p>
            </div>
          </div>
        </div>
      </div>
      

      {/*skills*/}


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className='font-bold text-2xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                Typescript/Javascript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                <div className='absolute w-[80%] rounded-xl h-1 bg-blue-500'>

                </div>
                <p className='font-bold text-blue-500 text-right'>80%</p>
            </div>
          </div>
        </div>
      </div>


      {/*skills*/}


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className='font-bold text-2xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                <div className='absolute w-[95%] rounded-xl h-1 bg-blue-500'>

                </div>
                <p className='font-bold text-blue-500 text-right'>95%</p>
            </div>
          </div>
        </div>
      </div>
      {/*skills*/}


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className='font-bold text-2xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                Next.js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                <div className='absolute w-[70%] rounded-xl h-1 bg-blue-500'>

                </div>
                <p className='font-bold text-blue-500 text-right'>70%</p>
            </div>
          </div>
        </div>
      </div>
      {/*skills*/}


      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className='font-bold text-2xl'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                Wordpress
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                <div className='absolute w-[85%] rounded-xl h-1 bg-blue-500'>

                </div>
                <p className='font-bold text-blue-500 text-right'>85%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills
