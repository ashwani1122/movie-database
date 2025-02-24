import MovieCard from '../component/MovieCard';
import "../styles/movie-list.css"
import "../styles/b-search.css"
export default function MovieList({ movieList, isLoading }) {
   
   console.log(movieList); // Check if movieList is being passed correctly

   if (isLoading) {
     return "Loading Movies Please Wait...";
   } else {
     if (!movieList || movieList.length === 0) {
       return <div className='b-search'>No movies available</div>;
     }
 
     return (
       <div className="movie-list">
         {movieList.map((movie) =>
           <MovieCard
             movie={movie}
             key={movie.imdbID}
           />
         )}
       </div>
     );
   }
 }
 