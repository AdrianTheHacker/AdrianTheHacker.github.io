import React from 'react'
import Link from 'next/link'

interface Props {
  imagePath: string
  url: string
}

const IconButton = (props: Props) => {
  return (
    <Link href={props.url} passHref={true}>
      <img className="h-14 object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" src={props.imagePath} />  
    </Link>
  )
}

export default IconButton