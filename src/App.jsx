import React from "react";
import "./App.css"
import Dice from "../Components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App(){
  const [dice, setDice] = React.useState(allDice())
  const [won, setWon] = React.useState(false)
  
  React.useEffect(() => {
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    const allOnHold = dice.every(die => die.isHeld)

    if(allSameValue && allOnHold){
      console.log("You Won")
      setWon(true)
    }
  },[dice])

  function generateRandomNumber(){
    return Math.ceil(Math.random()*6)
  }

  function allDice(){
    const dices = []
    for(let i = 0; i < 10; i++){
      dices.push({
        id: nanoid(),
        value: generateRandomNumber(),
        isHeld: false
      })
    }
    return dices
  }
  function holdDice(id){
    setDice(dice.map(die => {
      return (id === die.id ? {
        ...die,
        isHeld: !die.isHeld
      }:die)
    }))
  }

  const diceElements = dice.map(die => {
    return (<Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} handleClick={holdDice} />)
  })

  function rollDice(){
    if(!won){
      setDice(dice.map(die => {
        return(die.isHeld ? die : {
          ...die,
          value: generateRandomNumber()
        })
      }))
    }else {
      setDice(allDice())
      setWon(false)
    }
  }

  return(
    <div className="container">
      <div className="dice-container">
        <div className="dice-wrapper">
          {won && <Confetti />}
          {diceElements}
        </div>
        <button className="btn" onClick={rollDice}>{won ? "Restart Game" : "Roll"}</button>
      </div>
    </div>
  )
}