// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import EditUserView from 'src/views/apps/user/edit/EditUserView'

const EditUser = ({ id, userData }) => {
  return <EditUserView id={id} userData={userData} />
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
  return {
    props: {
      userData,
      id: params?.id
    }
  }
}

export default EditUser
