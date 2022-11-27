// ** Demo Components Imports
import RoomView from 'src/views/apps/room/utils/RoomView'

const AddRoom = () => {
  const id = ''
  const roomData = {
    code: '',
    status: '',
    name: '',
    building: '',
    type: '',
    capacity: '',
    desc: ''
  }
  return <RoomView id={id} isAdded={true} isEdited={true} roomData={roomData} />
}

export default AddRoom
