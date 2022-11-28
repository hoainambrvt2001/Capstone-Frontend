// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserView from 'src/views/apps/user/utils/UserView'

const EditUser = ({ id, userData }) => {
  return <UserView id={id} isAdded={false} userData={userData} />
}

export const getStaticProps = async () => {
  const id = '1'
  const userData = await axios.get('/apps/user', { params: { id } }).then(response => {
    return response.data
  })
  return {
    props: {
      userData,
      id: id
    }
  }
}

export default EditUser
