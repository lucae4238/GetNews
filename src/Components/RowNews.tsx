import React from 'react'
import {
  Button,
  TableCell,
  TableRow,
} from "@material-ui/core";

interface propsI {
    source: {
        name: string
    }
    publishedAt: string
    urlToImage: string
    url: string
    title: string
    author: string
}


const RowNews: React.FC<propsI> = (props: propsI) => {

    return (
 <TableRow key={props.url}>
                    <TableCell>
                      <img src={props.urlToImage} width="100%" alt={props.title} />
                    </TableCell>
                    <TableCell>{props.source.name}</TableCell>
{/* sometimes the author is a link, in order to avoid unnecesary long columns, it sets the name to 'unknown' */}
                    <TableCell>{props.author.length < 25 ? props.author : 'unknown'}</TableCell>
                    <TableCell>{props.title}</TableCell>
                    <TableCell width="max-content">
                      {props.publishedAt.substr(0, props.publishedAt.indexOf("T"))}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" href={props.url}>
                        URL
                      </Button>
                    </TableCell>
                  </TableRow>
    )
}

export default RowNews
