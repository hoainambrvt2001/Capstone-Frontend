// ** Demo Components Imports
import UserView from 'src/views/apps/user/utils/UserView'

const AddUser = () => {
  const userData = {
    email: '',
    role_id: '638c5f71700c4c50a7ffc028',
    name: '',
    phone_number: '',
    photo_url: ''
  }
  return <UserView id='' isAdded={true} userData={userData} />
}

export default AddUser
