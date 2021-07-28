import React from "react";
import { articleI } from "../../Redux/Actions/newsActionTypes";
import {
  Table,
  TableBody,
  TableContainer,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import sortByDate from "../../SortFunctions/SortByDate";
import PageButtons from "../PageButtons";
import RowNews from "./RowNews";
import NoResults from "../NoResults";
import  TableHeader  from "./TableHead";

export type directionI = "asc" | "desc";

export interface PropsI {
  array: articleI[];
}


const useStyles = makeStyles({
  table: {
    maxWidth: 1350,
  },
});


export const MyTable = (props: PropsI) => {
  const [direction, setDirection] = useState<directionI>("asc");
  const [bool, setBool] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const classes = useStyles();


  const handleSort = () => {
    setBool(true);
    direction === "asc" ? setDirection("desc") : setDirection("asc");
    sortByDate(props.array, direction);
  };

  //pagination
  let list = props.array;
  if (props.array.length > 10) {
    list = props.array.slice(page, page + 10);
  }
  //Buttons for pagination
  let buttonlist: any[] = PageButtons({ array: props.array, action: setPage });

  if (props.array.length === 0) {
    return <NoResults />  //ERROR HANDLER
  } else
    return (
      <>
        <TableContainer>
          <Table className={classes.table}>
            <TableHeader
              isActive={bool}
              direction={direction}
              handleSort={handleSort}
            />
            <TableBody>
              {list &&
                list.map((e) => (
                  <RowNews
                    key={e.url}
                    title={e.title}
                    publishedAt={e.publishedAt}
                    urlToImage={e.urlToImage}
                    url={e.url}
                    author={e.author}
                    source={e.source}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="pageButtons">{buttonlist}</div>
      </>
    );
};
