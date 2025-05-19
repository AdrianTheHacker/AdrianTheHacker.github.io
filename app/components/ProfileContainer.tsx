
import React from 'react'
import IconButton from './IconButton'

const ProfileContainer = () => {
  return (
    <div className="hero md:bg-base-200 lg:bg-base-200 h-svh w-svw">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/linkedInIcon2.png" 
          alt="LinkedIn Profile Photo"
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Adrian Tarantino</h1>
          <p className="py-6">First Year Electrical Engineering Student at The University of Waterloo</p>
          <div className="flex w-auto items-center gap-5">
            <IconButton imagePath="/githubIcon.png" url="https://github.com/AdrianTheHacker" />
            <IconButton imagePath="/linkedInIcon.png" url="https://www.linkedin.com/in/adriantarantino/" />
            <IconButton imagePath="/mailIcon.png" url="mailto:adrian.tarantino.career@gmail.com" />
            <IconButton imagePath="/youtubeIcon.png" url="https://www.youtube.com/@AdrianTheHacker" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer