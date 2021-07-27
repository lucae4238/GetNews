import { Grid, TextField } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./Actions/newsActions";
import { RootStore } from "./store";
import { MyTable } from "./Table";

function App() {
  const articles = useSelector((state: RootStore) => state.articles);
  const loading = useSelector((state: RootStore) => state.loading);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (loading) {
    return <>loading...</>;
  }

  return (
    <Grid container justify="center" spacing={2} alignItems="center" direction="column">
      <hr />
      <Grid item>
        <TextField

          placeholder="search AI related news!"
          autoFocus={true}
          value={input}
          onChange={handleInputChange}
          // fullWidth={true}
          margin="dense"
        />
      </Grid>
      <Grid item>
        <MyTable
          array={articles.filter(
            (e) =>
              e.title.toLowerCase().includes(input.toLowerCase()) ||
              e.content.toLowerCase().includes(input.toLowerCase())
          )}
        />
      </Grid>
    </Grid>
  );
}

export default App;
