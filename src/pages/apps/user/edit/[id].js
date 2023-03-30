// ** React Import
import { useState, useEffect } from 'react'

// ** Demo Components Imports
import { axiosClient } from 'src/api'
import { useAuth } from 'src/hooks/useAuth'

// ** Demo Components Imports
import UserView from 'src/views/apps/user/utils/UserView'

const EditUser = ({ id }) => {
  const auth = useAuth()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    const fetchData = async () => {
      const userRes = await axiosClient.get(`/user/${id}`, config).then(res => res.data)
      setUserData(userRes.data)
    }
    fetchData()
    return () => {}
  }, [])

  if (!userData) {
    return <div>Loading...</div>
  }

  return <UserView id={id} isAdded={false} userData={userData} />
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return { props: { id } }
}

export default EditUser
