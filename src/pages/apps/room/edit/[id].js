// ** React Import
import { useState, useEffect } from 'react'
import { getRoomDetail } from 'src/api/room'

// ** Demo Components Imports
import { useAuth } from 'src/hooks/useAuth'

// ** Demo Components Imports
import RoomView from 'src/views/apps/room/utils/RoomView'

const EditRoom = ({ id }) => {
  const auth = useAuth()

  const [roomData, setRoomData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const roomRes = await getRoomDetail(auth.accessToken, id)
      setRoomData(roomRes.data)
    }
    fetchData()
    return () => {}
  }, [])

  if (!roomData) {
    return <div>Loading...</div>
  }

  return <RoomView id={id} isAdded={false} isEdited={true} roomData={roomData} />
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return { props: { id } }
}

export default EditRoom
