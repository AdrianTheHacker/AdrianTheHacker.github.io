'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TextContainer = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          'Aspiring Control Systems Engineer🔧',
          1000,
          'Experienced in C++, Python and Java👨‍💻',
          1000,
          'Avid Snowboarder🏂',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      <p className="text-xl text-justify">
        Hello everyone!
        My name's Adrian Tarantino. I'm a first year Electrical Engineering student at the University of Waterloo. I'm interested in pursuing a career in control systems or automation. In my spare time I enjoy snowboarding, programming, and tinkering with electronics.
      </p>
    </>
  )
}

export default TextContainer