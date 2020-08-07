import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const le = props.anecdotes.length;   // getting length of anecdotes array
  const [points, setPoints] = useState(Array.apply(null, new Array(le)).map(Number.prototype.valueOf,0))
  const copy=[...points];
  // console.log(points)
  const handleClick=()=>{
    let x = Math.floor(Math.random() * le)  // random number generator
    // console.log(x)
    setSelected(x)
    setVote(0)
  }

  const voteClick=()=>{
    setVote(vote+1)
    copy[selected]+=1
    setPoints(copy)
  }

  // defining a function to get index of anecdote having max votes
  const maxfinder=(points)=>{
    if(points.length===0){
      return -1;}
    var max = points[0];
    var maxIndex = 0;
    for (var i = 1; i < points.length; i++) {
        if (points[i] > max) {
            maxIndex = i;
            max = points[i];
        }}
      return maxIndex;
  }


  let n = maxfinder(points)
  return (
    <div>
      <h1> Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br />
      <button onClick={voteClick}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1> Anecdote with most votes</h1>
      {props.anecdotes[n]}
      <br/>
      has {points[n]} votes
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
