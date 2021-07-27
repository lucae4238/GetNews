import { Button } from '@material-ui/core';
import React from 'react'
import { PropsI } from './Table'

interface Props extends PropsI{
    action: Function
}


const PageButtons = (props: Props) => {
    
    let buttonlist: any[] = [];


    for(let i = 0; i < ((props.array.length)/10 ); i ++ ){
      buttonlist.push(
        <Button key={i} onClick={() => {
          props.action(i)
         window.scroll(0,0)}}>
          {(i + 1)}
        </Button>
      )
    }
    return buttonlist
}

export default PageButtons
