// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = ({ id, userData, accessData }) => {
  return <UserViewPage id={id} userData={userData} accessData={accessData} />
}

export const getStaticProps = async () => {
  const id = '1'
  const userData = await axios.get('/apps/user', { params: { id } }).then(response => {
    return response.data
  })
  const accessData = await axios.get('/apps/access-event/user', { params: { userId: id } }).then(response => {
    return response.data
  })
  return {
    props: {
      userData,
      accessData,
      id: id
    }
  }
}

export default UserView
