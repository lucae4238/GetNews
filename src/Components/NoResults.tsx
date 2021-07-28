import React from "react";
import { Typography } from "@material-ui/core";
interface Props {}

const NoResults = (props: Props) => {
  return (
    <div className="centered">
      <Typography  variant="h1">
        No Results found
      </Typography>
    </div>
  );
};

export default NoResults;
