export default function Dice(props){
  const background = props.isHeld ? "#59E391" : ""
  return(
    <div className="dice-number" style={{background:background}} onClick={() => props.handleClick(props.id)}>
      <h1>{props.value}</h1>
    </div>
  )
}