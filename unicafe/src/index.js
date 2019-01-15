import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({clickHandler, name}) => {
    return (
        <button onClick={clickHandler}>
            {name}
        </button>
    )
}

const Statistics = ({ratings}) => {
    const [good, neutral, bad] = ratings; 
    if(ratings.reduce((acc, e) => acc + e, 0) == 0)
        return <p>Ei yhtään palautetta annettu</p>

    return(<>
    <Statistic name='good' value={good} />
    <Statistic name='neutral' value={neutral} />
    <Statistic name='bad' value={bad} />  
    <Summary counts={[good, neutral, bad]} />
    </>)
}

const Header = ({text}) => <h1>{text}</h1>

const Statistic = ({name, value, afterText}) => {
    return <p>{name} {value}{afterText ? afterText : ''}</p>

}

const Summary = ({counts}) => {
    let total_count = counts.reduce((acc, elem) => acc + elem, 0)
    let sum = counts[0] - counts[2];
    let mean = (total_count > 0) ? sum / total_count : 0; 
    let posRatio = (total_count > 0) ? counts[0] / total_count : 0;

    return <>
        <Statistic name='yhteensä' value={total_count} />
        <Statistic name='keskiarvo' value={mean} />
        <Statistic name='positiivisia' value={100 * posRatio}  afterText=' %'/>
    </>

}

const App = () => {
    const [good, setGood] = useState(0); 
    const [neutral, setNeutral] = useState(0); 
    const [bad, setBad] = useState(0); 



    return (
        <div>
        <div>
            <Header text='anna palautetta' />
            <Button clickHandler={() => setGood(good + 1)} name='good' />
            <Button clickHandler={() => setNeutral(neutral + 1)} name='neutral' />
            <Button clickHandler={() => setBad(bad + 1)} name='bad' />
        </div>
        <div>
            <Header text='statistiikka' />
            <Statistics ratings={[good, neutral, bad]} />
        </div>

        </div>
        )
}

ReactDOM.render(<App />,
     document.getElementById('root')); 