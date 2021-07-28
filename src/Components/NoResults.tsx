import React from "react";
import { Typography } from "@material-ui/core";

const NoResults : React.FC = () => {
  return (
    <div className="centered">
      <Typography  variant="h1">
        No Results found
      </Typography>
    </div>
  );
};

export default NoResults;
