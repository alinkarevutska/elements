import { useState } from "react";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const handleClick = (index) => {
        setExpandedIndex(index)
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id} onClick={() => handleClick(index)}>
                <div>{item.label}</div>
               {isExpanded && <div>{item.content}</div>} {/* if false, div is not rendered*/}
            </div>
        )
    })
    
    return <div>{renderedItems}</div>
}

export default Accordion;