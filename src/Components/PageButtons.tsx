import { Button } from '@material-ui/core';
import { PropsI } from './Table/Table'

interface Props extends PropsI{
    action: Function
}


const PageButtons = (props: Props): JSX.Element[] => {
    
    let buttonlist:JSX.Element[] = [];


    for(let i = 0; i < ((props.array.length)/10 ); i ++ ){
      buttonlist.push(
        <Button key={i} onClick={() => {
          props.action(i * 10)
         window.scroll(0,0)}}>
          {(i + 1)}
        </Button>
      )
    }  
    return buttonlist
}

export default PageButtons
