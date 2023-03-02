import { useState, useEffect } from "react"

function Timer(props) {

  const [ timerValue, setTimerValue ] = useState(0)
  const [ fontColor, setFontColor ] = useState("black")

  useEffect(() => {
    console.log("ComponentDidMount componente ha sido montado correctamente")
    // let num = 0;
    // ponemos a andar el temporizador
    const intervalId = setInterval(() => {

      // console.log("el timer avanza!") // 0
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

  useEffect(() => {
    // console.log("hubo un cambio (o inicializacion) de timerValue")
    // al inicio del ciclo de vida => componentDidMount
    // cuando existe cualquier actualizacion => componentDidUpdate
    if (timerValue > 5 && fontColor === "black") {
      console.log("has llegado al valor 5")
      props.setIsTimerShowing(false)
      // setFontColor("red")
    }
  }, [timerValue]) // dependencias
  //  |
  // las variables/estados/props que react escucha. Y cuando hay cambios en ellas, ejecuta el codigo.

  return (
    <div>
      
      <h3 style={{color: fontColor}}>{timerValue}</h3>

    </div>
  )
}

export default Timer