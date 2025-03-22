// import Image from 'next/image'
import React from 'react'
import IconButton from './IconButton'

const ProfileContainer = () => {
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure>
        <img src="/linkedInIcon2.png" alt="LinkedIn Profile Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Adrian Tarantino</h2>
        <p>First Year Electrical Engineering Student at The University of Waterloo</p>
        <div className="flex w-auto items-center justify-center gap-5">
          <IconButton imagePath="/githubIcon.png" url="https://github.com/AdrianTarantino" />
          <IconButton imagePath="/linkedInIcon.png" url="https://www.linkedin.com/in/adriantarantino/" />
          <IconButton imagePath="/mailIcon.png" url="mailto:adriantarantino2006@gmail.com" />
          <IconButton imagePath="/youtubeIcon.png" url="https://www.youtube.com/@AdrianTheHacker" />
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer