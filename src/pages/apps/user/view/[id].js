// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'

const UserView = ({ id, userData, accessData }) => {
  return <UserViewPage id={id} userData={userData} accessData={accessData} />
}

export const getStaticPaths = async () => {
  const res = await axios.get('/apps/users/list')
  const userData = await res.data.allData

  const paths = userData.map(user => ({
    params: { id: `${user.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
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
      id: params?.id
    }
  }
}

export default UserView
