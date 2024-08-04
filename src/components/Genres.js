import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

function Genres({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
  type,
}) {
    async function fetchGenres(){
       const {data} =  await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_APIKEY}`)
     setGenres(data.genres)
    }
    useEffect(()=>{
        fetchGenres();
        //cleanup function to unmount the Genres component 
        return () =>{
            setGenres({})
        }
    },[])
  return <div style={{padding:'6px 0'}}
  >
   { genres && genres.map((genre)=>(
    <Chip label={genre.name} color='primary' style={{margin:'2px'}}
    clickable
    size="small"
    key={genre.id}
    />
   ))}
  </div>;
}

export default Genres;
