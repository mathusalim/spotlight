import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import SearchResult from "../Components/SearchResult";
import { useSelector, useDispatch } from "react-redux";
import { setShown } from "../features/search/searchPanel";
import useMovieFetch from "../hooks/api/useMovieFetch";

const Static = () => {
  const { searchMovies } = useMovieFetch();

  const showSearchPanel = useSelector((state) => state.searchPanel.value);
  const dispatch = useDispatch();

  const handleSearch = (term) => {
    const result = searchMovies((x) => {
      return x.Title.toLowerCase().includes(term.toLowerCase());
    });
    !showSearchPanel && dispatch(setShown());
    result.then((d) =>
      setResults((prev) => ({
        ...prev,
        data: { movies: d.movies, count: d.count },
      }))
    );
  };

  const [results, setResults] = useState({
    data: { movies: [], count: 0 },
  });

  useEffect(() => {}, [results]);

  return (
    <>
      <Header search={handleSearch} />
      {showSearchPanel && <SearchResult data={results.data} />}
    </>
  );
};

export default Static;
