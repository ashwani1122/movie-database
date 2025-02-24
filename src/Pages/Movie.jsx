import React from 'react'
import { MovieList } from "../component";
export default function Movie({  movieList , isLoading  }) {
  return (
    <div>
    Movie-list Page
      <MovieList isLoading={isLoading}
            movieList={movieList} />
    </div>
  )
}
