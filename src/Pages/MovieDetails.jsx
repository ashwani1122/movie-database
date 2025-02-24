import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react" 
import "../styles/details.css"
import { useParams } from 'react-router'
import "../styles/movie-details.css"
export default function MovieDetails() {
  const [MovieDetails , setMovieDetails] = useState(null)
  const [isLoding , setisLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  useEffect(()=>{
    const fetchMovieDetails = async ()=>{
      setisLoading(true);
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=aa660442`);
      setMovieDetails(response.data);
      setisLoading(false);
    }
    fetchMovieDetails();
  } , [id])
    if(isLoding){
      return (
        <h1>Loding Movie Details</h1>
      )
     
    }
    else if(MovieDetails){
       return(
        <div className='movie-details'>
          <h1 className='movie'>MOVIE DETAILS</h1>
        <img className='poster' src={MovieDetails.Poster} alt={MovieDetails.Title}/>
        <div className="details">
        <p>  Plot : {MovieDetails.Plot}</p>
          <p> Title :  {MovieDetails.Title}</p>
          <p>Country :  {MovieDetails.Country}</p>
          <p>Language : {MovieDetails.Language}</p>
          <p>Awarrds : {MovieDetails.Awards}</p>
          <p>Box-office-collection : {MovieDetails.BoxOffice}</p>
          <p>Tear : {MovieDetails.Year}</p>
          <p>Released : {MovieDetails.Released}</p>
          <p>Rating :{MovieDetails.imdbRating}</p>
          <p>imdbID : {MovieDetails.imdbID}</p>
        <p>Actors : {MovieDetails.Actors}</p>
        </div>
          
        </div>
       ) 
    }
    else{
      return (null);
    }
    // return (
    //   <div>
    //     <MovieDetails/>
    //   </div>
    // )
}
