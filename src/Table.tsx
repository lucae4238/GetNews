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
  makeStyles
} from "@material-ui/core";
import { useState } from "react";
import sortByDate from "./SortFunctions/SortByDate";
import PageButtons from "./PageButtons";

export type directionI = "asc" | "desc";

export interface PropsI {
  array: articleI[];
}


export const MyTable = (props: PropsI) => {
  const [direction, setDirection] = useState<directionI>("asc");
  const [bool, setBool] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0)
  const handleSort = () => {
    setBool(true)
    direction === "asc" ? setDirection("desc") : setDirection("asc");
    sortByDate(props.array, direction);
  };
  let list = props.array
  if(props.array.length > 10){
    list = props.array.slice(page, page + 10)
  }
let buttonlist: any[] = PageButtons({array: props.array, action: setPage})

  const useStyles = makeStyles({
    table: {
      maxWidth: 1250,
    },
  });
  const classes = useStyles();
  return (
    <>
      <TableContainer >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell width="20%">
                <TableSortLabel>Image</TableSortLabel>
              </TableCell>
              <TableCell width="20%">
                <TableSortLabel>Source</TableSortLabel>
              </TableCell>
              <TableCell width="20%">
                <TableSortLabel>Author</TableSortLabel>
              </TableCell>
              <TableCell width="20%">
                <TableSortLabel>Title</TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={bool}
                  direction={direction}
                  onClick={handleSort}
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
            {list &&
              list.map(
                ({ title, source, author, url, publishedAt, urlToImage }) => (
                  <TableRow key={url}>
                    <TableCell ><img src={urlToImage} width='50%' alt={title}/></TableCell>
                    <TableCell>{source.name}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell width="max-content">
                      {publishedAt.substr(0, publishedAt.indexOf("T"))}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        href={url}
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
      {
        buttonlist
      }
    </>
  );
};
