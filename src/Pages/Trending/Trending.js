import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css'
import '../../App.css'
import CustomPagination from "../../components/Pagination/CustomPagination";


function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1)

  async function fetchingTrending_Movies() {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_APIKEY}&page=${page}`
      );
      console.log(response.data);
      if (response.data.results && response.data.results.length > 0) {
        setContent(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  }
  useEffect(() => {
    window.scroll(0,0)
    fetchingTrending_Movies();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date ||c.first_air_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>
    </div>
  );
}

export default Trending;
