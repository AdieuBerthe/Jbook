import './cell-list-item.css';
import { Cell } from "../../state/cell";
import CodeCell from "../code-cell/code-cell";
import TextEditor from "../text-editor/text-editor";
import ActionBar from "../action-bar/action-bar";

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({cell}) => {
    let child: JSX.Element;
    cell.type === 'code' ?
        
     child = <>
        <div className='action-bar-wrapper'>
            <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} /> 
     </>
     : 
     child = <>
     <TextEditor cell={cell} />
     <ActionBar id={cell.id}/>
     </>
     

    return(
        <div className="cell-list-item">
            {child}
            
        </div>
    )
};

export default CellListItem;