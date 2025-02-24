import './App.css';
import { BrowserRouter as Router , Routes ,Route  } from 'react-router-dom';
import { NavBar } from './component';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Movie from "./Pages/Movie";
import MovieDetails from './Pages/MovieDetails';
import axios from 'axios';
import { useState } from 'react';
import './styles/NavBar.css';


const API_BASE_URL = "https://www.omdbapi.com";

//&apikey=aa660442
function App() {
  const [isLoading, setisLoading] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const search = async (e) => {
    if (e.code === "Enter") {
      setisLoading(true);
      try {
        let response = await axios.get(API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442");
        if (response.data && response.data.Search) {
          setMovies(response.data.Search); // Set movie list
        } else {
          setMovies([]); // Set empty list if no results
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setMovies([]); // In case of error, set to empty list
      }
      setisLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Router>
        <Routes>
         
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" 
           element={<Movie isLoading={isLoading}
            movieList={Movies} />}/>  
             <Route path='/' element={<Home />}></Route>
           
            <Route path="/movie-list/:id" 
           element={<MovieDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
