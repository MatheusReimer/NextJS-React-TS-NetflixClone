import { Movie } from "../typings"
import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"

interface Props{
    netflixOriginals : Movie[]
}


function Banner({netflixOriginals}:Props) {

  const [movie,setMovie] = useState<Movie | null >(null)

  useEffect(()=>{
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  },[netflixOriginals])

  return (
    <div>
        <div className="absolute top-0 left-0">
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
            alt="movie image"
            layout="fill"
            />
        </div>
    </div>
  )
}

export default Banner