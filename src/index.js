import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <>
            <h1>{props.course}</h1>
        </>
    )
} 

const Part = (props) => (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
)



const Content = (props) => {

    return(
        <>
           <Part part={props.parts[0]} exercises={props.exercises[0]} />
           <Part part={props.parts[1]} exercises={props.exercises[1]} />
           <Part part={props.parts[2]} exercises={props.exercises[2]} />
        </>

    )
} 

const Total = (props) => {
    return (
        <>
            <p>Yhteensä {props.exercises.reduce((sum, e) => sum + e)}</p>
        </>
    )
} 

const App = () => {
    const course = "Half Stack -ohjelmistokehitys"
    const part1 = 'Reactin perusteet'; 
    const exercises1 = 10; 
    const part2 = 'Tiedonvälitys propseilla'; 
    const exercises2 = 7; 
    const part3 = 'Komponentin tila'; 
    const exercises3 = 14; 
    const parts =  [part1, part2, part3]; 
    const exercises = [exercises1, exercises2, exercises3]; 

    return(
        <div>
            <Header course={course} />
            <Content parts={parts} exercises={exercises} />
            <Total exercises={exercises} />
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById('root')); 