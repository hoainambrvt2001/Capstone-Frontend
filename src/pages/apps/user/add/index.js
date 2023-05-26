// ** Demo Components Imports
import { ROLE } from 'src/utils/constants'
import UserView from 'src/views/apps/user/utils/UserView'

const AddUser = () => {
  const userData = {
    email: '',
    role_id: ROLE.SUBSCRIBER_ID,
    name: '',
    phone_number: '',
    photo_url: ''
  }
  return <UserView id='' isAdded={true} userData={userData} />
}

export default AddUser
