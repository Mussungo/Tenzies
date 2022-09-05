export default function Dice(props){
  const background = props.isHeld ? "#59E391" : ""
  return(
    <div className="dice-number" onClick={() => props.handleClick(props.id)} style={{background:background}}>
      <h1>{props.value}</h1>
    </div>
  )
}