import React from 'react'
import { directionI } from './Table';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  makeStyles,
} from "@material-ui/core";

interface Props {
   isActive: boolean;
   direction: directionI;
   handleSort: () => void;
}
const useStyles = makeStyles({
  headers: {
    width: "20%",
  },
});

const TableHeader: React.FC<Props> = (props) : JSX.Element => {
  const classes = useStyles();
    return (
            <TableHead>
              <TableRow>
                <TableCell className={classes.headers}>Image</TableCell>
                <TableCell className={classes.headers}>Source</TableCell>
                <TableCell width="5%">Author</TableCell>
                <TableCell className={classes.headers}>Title</TableCell>
                <TableCell
                className={classes.headers}>
                  <TableSortLabel
                    active={props.isActive}
                    direction={props.direction}
                    onClick={() => props.handleSort}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell>URL</TableCell>
              </TableRow>
            </TableHead>
    )
}

export default TableHeader
