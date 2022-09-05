import React from "react";
import "./App.css"
import Dice from "../Components/Dice";
import { nanoid } from "nanoid";

export default function App(){
  const [dice, setDice] = React.useState(allNewDice())
  const diceElements = dice.map(die => {
    return(
      <Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} handleClick={holdDice}/>
    )
  })

  function generateRadomNumber(){
    return Math.ceil(Math.random()*6)
  }

  function allNewDice(){
    const dices = []
    for(let i = 0; i < 10; i++){
      dices.push({
        id: nanoid(),
        value: generateRadomNumber(),
        isHeld: false
      })
    }
    return dices
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(dice => {
      return {
        ...dice,
        value: generateRadomNumber()
      }
    }))
    console.log(dice)
  }

  function holdDice(id) {
    /**Create the logic of hold dice */
  }

  return(
    <div className="container">
      <div className="dice-container">
        <div className="dice-wrapper">
          {diceElements}
        </div>
        <button className="btn" onClick={rollDice}>Roll</button>
      </div>
    </div>
  )
}