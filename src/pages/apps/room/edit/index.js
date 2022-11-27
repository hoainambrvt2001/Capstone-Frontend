// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import RoomView from 'src/views/apps/room/utils/RoomView'

const EditRoom = ({ id, roomData }) => {
  return <RoomView id={id} isAdded={false} isEdited={true} roomData={roomData} />
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

export default EditRoom
