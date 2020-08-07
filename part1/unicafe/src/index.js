import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1> give feedback</h1>
      <Button good={good} bad={bad} neutral={neutral} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <Statistics a={good} c={bad} b={neutral} />
      </div>
  )
}

const Statistics = (props) =>{
 
  if(props.a+props.b+props.c===0){
    return(
      <div>
        <h1> statistics</h1>
        <p>No feedback given</p>
      </div>
    
  )
}
  return (
    <div>
      <h1> statistics</h1>
      <table>
      < Statistic text="good" value ={props.a} />
      < Statistic text="neutral" value ={props.b} />
      < Statistic text="bad" value ={props.c} />
      < Statistic text="all" value = {props.a+props.b+props.c} />
      < Statistic text="average" value= {(props.a-props.c)/(props.a+props.b+props.c)} />
      < Statistic text="positive" value= {((props.a)/(props.a+props.b+props.c))*100+"%"}/>
      </table>
    </div>
  
  )
}

const Statistic = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>  
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Button = (props) => {
  return  (
  <div>
    <button onClick={() => props.setGood(props.good + 1)}>
      good
    </button>
    <button onClick={() => props.setNeutral(props.neutral + 1)}>
      neutral
    </button>
    <button onClick={() => props.setBad(props.bad + 1)}>
      bad
    </button>
  </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)



