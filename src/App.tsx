import { Input } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./Actions/newsActions";
import { RootStore } from "./store";
import { MyTable } from "./Table";
// import {Link} from 'react-router-dom'

function App() {
  const articles = useSelector((state: RootStore) => state.articles);
  const loading = useSelector((state: RootStore) => state.loading);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(articles[0])
  };
  
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (loading) {
    return <>loading...</>;
  }

  return (
    <>
      <Input
        placeholder="search AI related news!"
        autoFocus={true}
        color="primary"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <MyTable array={articles.filter(e => e.title.toLowerCase().includes(input.toLowerCase()) || e.content.toLowerCase().includes(input.toLowerCase()))} />
    </>
  );
}

export default App;
