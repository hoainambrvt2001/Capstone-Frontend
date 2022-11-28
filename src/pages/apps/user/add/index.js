// ** Demo Components Imports
import UserView from 'src/views/apps/user/utils/UserView'

const AddUser = () => {
  const userData = {
    username: '',
    role: 'subscriber',
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    birthdate: new Date().getTime(),
    company: '',
    address: '',
    country: '',
    gender: 'male'
  }
  return <UserView id='' isAdded={true} userData={userData} />
}

export default AddUser
