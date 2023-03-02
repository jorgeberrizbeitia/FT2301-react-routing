import { useState } from "react"
import Timer from "./Timer"


function TimerControl() {

  const [isTimerShowing, setIsTimerShowing] = useState(false)

  const handleToggleTimer = () => {
    setIsTimerShowing(!isTimerShowing)
  }

  return (
    <div>
      
      <h4>Control del Timer</h4>

      <button onClick={ handleToggleTimer }>
        {isTimerShowing === true ? "Ocultar" : "Mostrar"} Timer
      </button>

      { isTimerShowing === true ? <Timer setIsTimerShowing={setIsTimerShowing}/> : null }

      

    </div>
  )
}

export default TimerControl