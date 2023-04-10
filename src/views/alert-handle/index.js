// ** React Imports
import { useEffect, useState } from 'react'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { raiseAlertWithImage } from 'src/store/apps/alert-with-image'
import { raiseAlertWithoutImage } from 'src/store/apps/alert-without-image'

// ** MQTT Imports
import mqtt from 'mqtt'
import { ABNORMAL_EVENT_TYPE } from 'src/constants'

// ** Third Party Components
import ImageDialog from 'src/views/dialogs/ImageDialogComponent'
import AlertWithImages from 'src/views/dialogs/AlertWithImagesComponent'
import AlertWithoutImages from 'src/views/dialogs/AlertWithoutImagesComponent'

const AlertHandler = () => {
  // ** Redux Component:
  const dispatch = useDispatch()

  // ** React State Variables:
  const [client, setClient] = useState(null)
  const [connectStatus, setConnectStatus] = useState('')
  const [subTopic, setSubTopic] = useState('')
  const [payload, setPayload] = useState('')

  // ** Mqtt Service:
  useEffect(() => {
    const mqttConnect = () => {
      const host = process.env.NEXT_PUBLIC_ADAFRUIT_HOST
      const mqttOptions = {
        username: process.env.NEXT_PUBLIC_ADAFRUIT_USERNAME,
        password: process.env.NEXT_PUBLIC_ADAFRUIT_KEY
      }
      setConnectStatus('Connecting')
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
        setConnectStatus('Connected')
      })
      client.on('error', err => {
        console.error('Connection error: ', err)
        client.end()
      })
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting')
      })
      client.on('message', (topic, message) => {
        const payload = { topic, message: JSON.parse(message) }
        if (payload.topic == subTopic) {
          if (payload.message.abnormal_type_id === ABNORMAL_EVENT_TYPE.STRANGER) {
            dispatch(raiseAlertWithImage({ data: payload.message }))
          } else if (payload.message.abnormal_type_id === ABNORMAL_EVENT_TYPE.OVERCROWD) {
            dispatch(raiseAlertWithoutImage({ data: payload.message }))
          } else if (payload.message.abnormal_type_id === ABNORMAL_EVENT_TYPE.FIRE) {
            dispatch(raiseAlertWithoutImage({ data: payload.message }))
          } else if (payload.message.abnormal_type_id === ABNORMAL_EVENT_TYPE.OTHER) {
          }
        }
        setPayload(payload)
      })
    } else {
      mqttConnect()
    }
  }, [client])

  useEffect(() => {
    console.log(connectStatus)
  }, [connectStatus])

  return (
    <>
      <AlertWithImages />
      <AlertWithoutImages />
      <ImageDialog />
    </>
  )
}

export default AlertHandler
