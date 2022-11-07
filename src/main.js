import React from "react";
import "./main.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/home";
import Movie from "./component/movie"
import MovieList from "./component/movieList";
 
function main(){

    return(
        <div>
            <Router>
                
                <Header/>
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="movie/:id" element={<Movie/>}></Route>
                    <Route path="movies/:type" element={<MovieList/>}></Route>
                    <Route path="/" element={<h1>Page Loding</h1>}></Route>

                    
                </Routes>
            </Router>
        </div>
    );
}
export default main;