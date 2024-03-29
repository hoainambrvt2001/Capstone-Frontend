// ** React Imports
import { useState, useEffect } from 'react'
import { getAbnormalEventDetail } from 'src/api/abnormal-event'
import { getAllRooms } from 'src/api/room'

// ** Third Party Imports
import { useAuth } from 'src/hooks/useAuth'

// ** Demo Components Imports
import EventView from 'src/views/apps/abnormal-event/utils/EventView'

const ViewEvent = ({ id }) => {
  const auth = useAuth()

  const [eventData, setEventData] = useState(null)
  const [allRooms, setAllRooms] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const eventRes = await getAbnormalEventDetail(auth.accessToken, id)
      setEventData(eventRes.data)
      const roomRes = await getAllRooms(auth.accessToken)
      setAllRooms(roomRes.data)
    }
    fetchData()

    return () => {}
  }, [auth.accessToken, id])

  if (!eventData || !allRooms) {
    return <div>Loading...</div>
  }

  return <EventView id={id} isEdited={false} eventData={eventData} listRooms={allRooms} />
}

export async function getServerSideProps(context) {
  const { id } = context.query

  return { props: { id } }
}

export default ViewEvent
