import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


const Button = ({clickEvent, text, id}) => <button id={id || ''} onClick={clickEvent}>{text}</button>

const Statistic = ({voteCount}) => <p>has {voteCount} votes</p>

const App = ({anectodes}) => {
  const [selected, setSelected] = useState(0)
  
  
  const displayRandom = () => {
      let r = Math.floor(anecdotes.length * Math.random()); 
      setSelected(r); 
  }

  const voteAnecdote = (idx) => {
      scores[idx]++;   
      //helposti triggeröity renderöinnin päivittäminen ilman että tuloksia käytetään hookkina
      setSelected(idx); 
  }

  return (
    <div>
     <p>{anecdotes[selected]}</p>
      <Statistic voteCount={scores[selected]}/>
      <Button clickEvent={() => voteAnecdote(selected)} text='Vote' id='votes' />
      <Button clickEvent={displayRandom} text='Next anecdote' />
    </div>
  )
}



let scores = new Array(anecdotes.length); 
scores = scores.fill(0); 

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)