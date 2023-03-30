// ** React Import
import { useState, useEffect } from 'react'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'
import { axiosClient } from 'src/api'
import { useAuth } from 'src/hooks/useAuth'

const UserView = ({ id }) => {
  const auth = useAuth()

  const [userData, setUserData] = useState(null)
  const [accessData, setAccessData] = useState(null)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }
    const fetchData = async () => {
      const userRes = await axiosClient.get(`/user/${id}`, config).then(res => res.data)
      setUserData(userRes.data)
      const accessRes = await axiosClient.get(`/access-event?uid=${userRes.data.id}`, config).then(res => res.data)
      setAccessData(accessRes.data)
    }
    fetchData()
    return () => {}
  }, [])

  if (!userData || !accessData) {
    return <div>Loading...</div>
  }

  return <UserViewPage id={id} userData={userData} accessData={accessData} />
}

export async function getServerSideProps(context) {
  const { id } = context.query
  return { props: { id } }
}

export default UserView
