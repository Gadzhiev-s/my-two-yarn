import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import AccordionTitle from "./components/Accordion/Accordion";

// function Hellow(){
//     debugger
//     alert('ПРИВЕТ')
// }
// Hellow()
function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My frinds'}/>
            Active1
            {/*<Rating value={5}/>*/}
            <Accordion title={'РЕСТОРАННОЕ МЕНЮ'} collapsed={true}/>
            <Accordion title={'USERS'} collapsed={true}/>
            Active2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}
type PageTitleType = {
    title:string
}

function PageTitle(props:PageTitleType) {
    console.log('PageTitle  rendering')
    return <h1>{props.title}</h1>
}


export default App;
