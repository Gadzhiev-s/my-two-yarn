import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
    function Accordion(props: AccordionPropsType){
    if (props.collapsed === true) {
        return <div>
            <AccordionTitle titleValue={props.title}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>

            <AccordionBody/>
        </div>

    }
}

type AccordionTitlePropsType = {
    titleValue: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>--{props.titleValue}--</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;
