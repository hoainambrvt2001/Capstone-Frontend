import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { AlertWithImages, AlertWithoutImages } from 'src/views/utils'
import mqtt from 'mqtt'
import { ALERT_TYPE } from 'src/utils/constants'

const Page = () => {
  const building = 'B4'
  const room = '303'
  const [client, setClient] = useState(null)
  const [connectStatus, setConnectStatus] = useState('')
  const [isSub, setIsSub] = useState(false)
  const [payload, setPayload] = useState('')
  const [showStranger, setShowStranger] = useState(false)
  const [showAccessRequest, setShowAccessRequest] = useState(false)
  const [showOverload, setShowOverload] = useState(false)
  const [showFire, setShowFire] = useState(false)

  useEffect(() => {
    const mqttConnect = (host, mqttOption) => {
      setConnectStatus('Connecting')
      setClient(mqtt.connect(host, mqttOption))
    }

    const mqttPublish = topic => {
      if (client) {
        const payload = 'abc'
        client.publish(topic, payload, error => {
          if (error) {
            console.log('Publish error: ', error)
          }
        })
      }
    }

    const mqttSub = topic => {
      if (client) {
        client.subscribe(topic, error => {
          if (error) {
            console.log('Subscribe to topics error', error)
          }
          setIsSub(true)
        })
      }
    }

    if (client) {
      console.log(client)
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
        const payload = { topic, message: message.toString() }
        if (payload.message === ALERT_TYPE.STRANGER) {
          setShowStranger(true)
        } else if (payload.message === ALERT_TYPE.ACCESS_REQUEST) {
          setShowAccessRequest(true)
        } else if (payload.message === ALERT_TYPE.OVERLOAD) {
          setShowOverload(true)
        } else if (payload.message === ALERT_TYPE.FIRE) {
          setShowFire(true)
        }
        setPayload(payload)
      })
    } else {
      const mqttOption = {
        username: process.env.NEXT_PUBLIC_ADAFRUIT_IO_USERNAME,
        password: process.env.NEXT_PUBLIC_ADAFRUIT_IO_KEY
      }
      mqttConnect(process.env.NEXT_PUBLIC_ADAFRUIT_HOST, mqttOption)
    }
  }, [client])

  useEffect(() => {
    console.log(connectStatus)
  }, [connectStatus])

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithImages
          eventType='stranger'
          building={building}
          room={room}
          show={showStranger}
          setShow={setShowStranger}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithImages
          eventType='ask-for-permission'
          building={building}
          room={room}
          show={showAccessRequest}
          setShow={setShowAccessRequest}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithoutImages
          eventType='overload'
          building={building}
          room={room}
          nowRoomSize={151}
          maxRoomSize={150}
          show={showOverload}
          setShow={setShowOverload}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithoutImages eventType='fire' building={building} room={room} show={showFire} setShow={setShowFire} />
      </Grid>
    </Grid>
  )
}

export default Page
