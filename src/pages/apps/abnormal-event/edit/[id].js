// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Imports
import { getAbnormalEventDetail, getAllRooms } from 'src/api'
import { useAuth } from 'src/hooks/useAuth'

// ** Demo Components Imports
import EventView from 'src/views/apps/abnormal-event/utils/EventView'

const EditEvent = ({ id }) => {
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
  }, [])

  if (!eventData || !allRooms) {
    return <div>Loading...</div>
  }

  return <EventView id={id} isEdited={true} eventData={eventData} listRooms={allRooms} />
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return { props: { id } }
}

export default EditEvent
