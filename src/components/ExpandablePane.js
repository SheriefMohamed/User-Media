import classNames from "classnames";
import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from 'react-icons/go'

function ExpandablePane({header, children, className}){
    const [expanded, setExpande] = useState(false) ;

    const hanldClick = () => {
        setExpande(!expanded);
    }

    const classes = classNames("mb-2 border rounded", className)

    return (
        <div className={classes}>
            <div className="flex p-2 justify-between items-center">
                <div className='flex flex-row items center justify-between '>
                    {header}
                </div>
                <div onClick={hanldClick} className="text-xl cursor-pointer">
                    {expanded ? <GoChevronDown/> : <GoChevronLeft/>}
                </div>
            </div>
            {expanded && <div className="p-2 border-t">{children}</div>}
        </div>
    )
}

export default ExpandablePane;