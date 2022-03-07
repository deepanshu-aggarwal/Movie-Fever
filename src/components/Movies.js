import React, { useState, useEffect } from 'react'
import Image from "../banner.jpg"
import axios from "axios"
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination'

function Movies() {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [hover, setHover] = useState('')
    const [favorites, setFavorites] = useState([])

    function goAhead() {
        setPage(page + 1);
    }
    function goBehind() {
        if (page > 1)
            setPage(page - 1);
    }

    useEffect(function () {
        let oldFav = localStorage.getItem("mfdb");
        oldFav = JSON.parse(oldFav) || [];
        setFavorites([...oldFav]);
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=0b5254d5956bb98e2b548cf47a97efe6&page=${page}`)
            .then((res) => {
                console.table(res.data.results)
                setMovies(res.data.results)
            }
            )
    }, [page])

    let add = (movie) => {
        let newArray = [...favorites,movie]
        setFavorites([...newArray])
        // console.log(newArray)
        // saving for reload
        localStorage.setItem("mfdb", JSON.stringify(newArray))
    }
    
    let del = (movie) => {
        let newArray = favorites.filter((m) => m.id != movie.id);
        setFavorites([...newArray]);
        localStorage.setItem("mfdb", JSON.stringify(newArray))
    }

    return <>
        <div className="mb-8">
            <div className="mt-8 mb-8 font-bold text-2xl flex justify-center">Trending Movies</div>
            {
                movies.length == 0 ?
                    <div className="flex justify-center">
                        <Oval
                            height="100"
                            width="100"
                            color='grey'
                            secondaryColor='grey'
                            ariaLabel='loading'
                        />
                    </div> :

                    <div className="flex flex-wrap justify-center">
                        {
                            movies.map((movie) => (
                                <div className={`bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] md:w-[250px] md:h-[30vh] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative`}
                                    onMouseEnter={() => setHover(movie.id)} onMouseLeave={() => setHover("")}>
                                    {
                                        hover == movie.id &&
                                        <>
                                            {favorites.find((m) => m.id==movie.id) ?
                                                <div className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer" onClick={() => del(movie)}>❌</div>
                                                : <div className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer" onClick={() => add(movie)}>😍</div> 
                                            }
                                        </>
                                    }
                                    <div className="bg-gray-900 w-full rounded-b-xl text-white text-center bg-opacity-70">{movie.title}</div>
                                </div>
                            ))
                        }

                    </div>
            }
        </div>
        <Pagination pageProp={page} goBehind={goBehind} goAhead={goAhead} />
    </>
}

export default Movies;