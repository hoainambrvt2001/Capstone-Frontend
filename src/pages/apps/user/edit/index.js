// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import EditUserView from 'src/views/apps/user/edit/EditUserView'

const EditUser = ({ id, userData }) => {
  return <EditUserView id={id} userData={userData} />
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
