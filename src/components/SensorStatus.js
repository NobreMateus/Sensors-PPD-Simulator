import React, { useEffect, useState } from 'react'

function SensorStatus(props) {

    const [messages, setMessages] = useState([])

    useEffect(() => {

        props.socket.emit(`get-${props.sensor}`, {})

        props.socket.on(props.sensor, (data, callback) => {
            setMessages(oldMessages => oldMessages.concat(data))
            callback({status:"ok"})
        });
    }, [props])

    return (
        <div className="sensor-container">
            <h3>Sensores: {props.sensor}</h3>
            {messages.map((message, num) => (
                <div key={`sensor-${num}`} className="message-container" style={{opacity: "1"}}>
                    <div><b>Sensor: </b>{message.identifier}</div>
                    <div><b>Valor Mínimo: </b>{message.minValue}</div>
                    <div><b>Valor Máximo: </b>{message.maxValue}</div>
                    <div><b>Valor Registrado: </b>{message.value}</div>
                </div>

            ))}
        </div>
    )
}

export default SensorStatus
