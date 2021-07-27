import React from "react";
import { articleI } from "./Actions/newsActionTypes";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { useState } from "react";
import sortByDate from "./SortFunctions/SortByDate";

export type directionI = "asc" | "desc";

interface Props {
  array: articleI[];
}


export const MyTable = (props: Props) => {
  const [direction, setDirection] = useState<directionI>("asc");
  const [bool, setBool] = useState<boolean>(false);
  const handleSort = () => {
    setBool(true)
    direction === "asc" ? setDirection("desc") : setDirection("asc");
    sortByDate(props.array, direction);
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel>Image</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Source</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Author</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>Title</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={bool}
                  direction={direction}
                  onClick={handleSort}
                  style={{ width: "100" }}
                >
                  Date
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel>URL</TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.array &&
              props.array.map(
                ({ title, source, author, url, publishedAt, urlToImage }) => (
                  <TableRow key={url}>
                    <TableCell ><img src={urlToImage} width='20%' alt={title}/></TableCell>
                    <TableCell>{source.name}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>
                      {publishedAt.substr(0, publishedAt.indexOf("T"))}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => (window.location.href = url)}
                      >
                        URL
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
