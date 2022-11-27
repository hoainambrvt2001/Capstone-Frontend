// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import RoomView from 'src/views/apps/room/utils/RoomView'

const ViewRoom = ({ id, roomData }) => {
  return <RoomView id={id} isAdded={false} isEdited={false} roomData={roomData} />
}

export const getStaticProps = async () => {
  const id = '1'
  const roomData = await axios.get('/apps/room', { params: { id } }).then(response => {
    return response.data
  })
  return {
    props: {
      roomData,
      id: id
    }
  }
}

export default ViewRoom
