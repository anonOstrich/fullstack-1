import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <>
            <h1>{props.course.name}</h1>
        </>
    )
} 

const Part = (props) => (
    <>
      <p>{props.part.name} {props.part.exercises}</p>
    </>
)



const Content = (props) => {

    return(
        <>
           <Part part={props.parts[0]} />
           <Part part={props.parts[1]} />
           <Part part={props.parts[2]} />
        </>

    )
} 

const Total = (props) => {
    return (
        <>
            <p>Yhteensä {props.parts.reduce((sum, e) => sum + e.exercises, 0)}</p>
        </>
    )
} 

const App = () => {
    
    const course = {
        name: 'Half Stack -sovelluskehitys', 
        parts: [
            {
                name: 'Reactin perusteet', 
                exercises: 10
            }, 
            {
                name: 'Tiedonvälitys propseilla', 
                exercises: 7
            }, 
            {
                name: 'Komponenttien tila', 
                exercises: 14
            }
        ]
    }
    

    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total parts={course.parts} />
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('root')); 