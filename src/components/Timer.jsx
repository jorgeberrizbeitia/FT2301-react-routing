import { useState, useEffect } from "react"

function Timer() {

  const [ timerValue, setTimerValue ] = useState(0)

  useEffect(() => {
    console.log("ComponentDidMount componente ha sido montado correctamente")
    // let num = 0;
    // ponemos a andar el temporizador
    const intervalId = setInterval(() => {

      console.log("el timer avanza!") // 0
      setTimerValue((currentState) => {
        return currentState + 1 // el nuevo valor que tendra timerValue
      })
      // setTimerValue(patata => patata + 1)
    }, 1000)

    return () => {
      console.log("ComponentWillUnmount componente ha sido desmontado correctamente")
      clearInterval(intervalId)
    }

  }, []) // dependencias vacias

  

  return (
    <div>
      
      <h3>{timerValue}</h3>

    </div>
  )
}

export default Timer