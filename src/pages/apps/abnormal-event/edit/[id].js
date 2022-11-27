// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import EditRoomView from 'src/views/apps/room/edit/EditRoomView'

const EditRoom = ({ id, roomData }) => {
  return <EditRoomView id={id} roomData={roomData} />
}

export const getStaticPaths = async () => {
  const res = await axios.get('/apps/rooms/list')
  const roomData = await res.data.allData

  const paths = roomData.map(room => ({
    params: { id: `${room.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const roomData = await axios.get('/apps/room', { params: { id } }).then(response => {
    return response.data
  })
  return {
    props: {
      roomData,
      id: params?.id
    }
  }
}

export default EditRoom
