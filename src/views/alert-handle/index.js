// ** React Imports
import { useEffect, useState } from 'react'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { raiseAlertWithImage } from 'src/store/apps/alert-with-image'
import { raiseAlertWithText } from 'src/store/apps/alert-with-text'

// ** MQTT Imports
import mqtt from 'mqtt'
import { ABNORMAL_EVENT_TYPE } from 'src/utils/constants'

// ** Third Party Components
import DialogWithImage from 'src/views/dialogs/DialogWithImage'
import DialogAlertWithImage from 'src/views/dialogs/DialogAlertWithImage'
import DialogAlertWithText from 'src/views/dialogs/DialogAlertWithText'

const AlertHandler = () => {
  // ** Redux Component:
  const dispatch = useDispatch()

  // ** React State Variables:
  const [client, setClient] = useState(null)
  const [connectStatus, setConnectStatus] = useState('')
  const [subTopic, setSubTopic] = useState('')

  // ** Mqtt Service:
  useEffect(() => {
    const mqttConnect = () => {
      const host = process.env.NEXT_PUBLIC_ADAFRUIT_HOST
      const mqttOptions = {
        clean: true,
        connectTimeout: 4000,
        username: process.env.NEXT_PUBLIC_ADAFRUIT_USERNAME,
        password: process.env.NEXT_PUBLIC_ADAFRUIT_KEY
      }
      setConnectStatus(`Connecting to: ${process.env.NEXT_PUBLIC_ADAFRUIT_HOST}`)
      setClient(mqtt.connect(host, mqttOptions))
    }

    const mqttSub = topic => {
      if (client) {
        client.subscribe(topic, error => {
          if (error) {
            console.log('Subscribe to topics error', error)
          }
          setSubTopic(topic)
        })
      }
    }

    if (client) {
      client.on('connect', () => {
        mqttSub(process.env.NEXT_PUBLIC_ADAFRUIT_TOPIC)
        setConnectStatus(`Connected to: ${process.env.NEXT_PUBLIC_ADAFRUIT_TOPIC} topic`)
      })
      client.on('error', err => {
        console.error('Connection error: ', err)
        client.end()
      })
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting')
      })
      client.on('message', (topic, message) => {
        if (topic === subTopic) {
          const payload = { topic, message: JSON.parse(message) }
          if (payload.message.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.STRANGER) {
            dispatch(raiseAlertWithImage({ data: payload.message.data }))
          } else if (payload.message.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.OVERCROWD) {
            dispatch(raiseAlertWithText({ data: payload.message.data }))
          } else if (payload.message.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.FIRE) {
            dispatch(raiseAlertWithText({ data: payload.message.data }))
          } else if (payload.message.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.OTHER) {
          }
        }
      })
    } else {
      mqttConnect()
    }

    return () => {
      if (client) client.end()
    }
  }, [client])

  useEffect(() => {
    console.log(connectStatus)
  }, [connectStatus])

  return (
    <>
      <DialogAlertWithImage />
      <DialogAlertWithText />
      <DialogWithImage />
    </>
  )
}

export default AlertHandler
