import React, { useState, useEffect } from "react";
import "../Trending/Trending.css";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numofPages, setNumofPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  async function fetchingData() {
    // console.log(process.env.REACT_APP_APIKEY)
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}`
      );
      console.log("movieData", data);
      if (data.results && data.results.length > 0) {
        setContent(data.results);
        setNumofPages(data.total_pages);
      }
    } catch (error) {
      console.log("Error fetching trending movies:", error);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchingData();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
        type='movie'
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numofPages > 1 && <CustomPagination setPage={setPage} />}
    </div>
  );
}

export default Movies;
