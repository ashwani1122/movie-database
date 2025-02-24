import React from 'react';
import "../styles/movie-card.css";
import "../styles/movie-card-info.css";
import { Link } from 'react-router'; 
export default function MovieCard({ movie }) {
  return (
    <div>
       <Link to={`/movie-list/${movie.imdbID}`}>
      
      <div className="movie-card">
      <img style={{width:'100%', display:"grid", placeItems:"center" , gridTemplateColumns:"3 , 1fr"}} src={movie.Poster} alt={movie.Title} />
       <div className='Movie-card-info'>
       <p>{movie.Title}</p>
       <p>Year: {movie.Year}</p>
       <p>IMDB ID: {movie.imdbID}</p>
       </div>
     </div>
     
     </Link>
    </div>
   

  );
}
