"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='Project'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-8">
        {/*project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="Project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../Project/HiRes-17.jpg")}
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              THE UNIVERSITY MANAGEMENT SYSTEM
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              University management system
            </h1>
            <p className="leading-relaxed">
              I made project based on university management system.
            </p>
            <Link href={require("../../Project/HiRes-17.jpg")}>
            <p className="leading-relaxed  text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="Project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../Project/download.jpg")}
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              THE CALC
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
              I made this calculator.
            </p>
            <Link href={require("../../Project/HiRes-17.jpg")}>
            <p className="leading-relaxed  text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="Project"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../Project/image.jpg")}
            width={100}
            height={100}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              THE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Project
            </h1>
            <p className="leading-relaxed">
              I made this project.
            </p>
            <Link href={require("../../Project/HiRes-17.jpg")}>
            <p className="leading-relaxed  text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )}
  
export default Project
