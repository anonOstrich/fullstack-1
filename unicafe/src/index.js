import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({clickHandler, name}) => {
    return (
        <button onClick={clickHandler}>
            {name}
        </button>
    )
}

const Header = ({text}) => <h1>{text}</h1>

const Statistic = ({name, count}) => {
    return <p>{name} {count}</p>

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
            <Statistic name='good' count={good} />
            <Statistic name='neutral' count={neutral} />
            <Statistic name='bad' count={bad} />   
        </div>

        </div>
        )
}

ReactDOM.render(<App />,
     document.getElementById('root')); 