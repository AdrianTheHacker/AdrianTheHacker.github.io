'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextContainer = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-11/12 sm:w-11/12">
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div>
          <h1 className="text-3xl font-bold">
            <TypeAnimation
              sequence={[
                'Aspiring engineer🔧',
                1000,
                'Aspiring entrepreneur🧑‍💼',
                1000,
                'Aspiring problem solver🧩',
                1000,
                'I know Altium Designer⚡',
                1000, 
                'I know Breadboarding⚡',
                1000,
                'I know C++ & Python👨‍💻',
                1000,
                'I know Next.JS & Firebase👨‍💻',
                1000,
                'My hobby is Snowboarding🏂',
                1000,
                'My hobby is making🤖',
                1000,
                'My hobby is tinkering🔌',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl text-left">
            Hello everyone! My name is Adrian Tarantino. I'm an electrical engineering student at the University of Waterloo, 
            interested in pursuing a career in circuit design or firmware development for robotics or biomedical applications.
            In my spare time I enjoy snowboarding, programming, and tinkering with electronics.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TextContainer