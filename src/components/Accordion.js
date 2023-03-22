import { useState } from "react";
import { GoChevronDown, GoChevronLeft} from "react-icons/go";


function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (index) => {
        expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-2xl">{isExpanded ? < GoChevronDown/> : <GoChevronLeft/> }</span>

        return (
            <div key={item.id} className="max-w-7xl">
                <div onClick={() => handleClick(index)}
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
                   {item.label} {icon} 
                </div>
                {isExpanded && 
               <div className="border-b p-5"> {/* if false, div is not rendered*/}
                    {item.content} 
                </div>} 
            </div>
        )
    })
    
    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;