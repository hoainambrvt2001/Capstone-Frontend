// ** React Import
import { useState, useEffect } from 'react'

// ** Demo Components Imports
import UserViewPage from 'src/views/apps/user/view/UserViewPage'
import { useAuth } from 'src/hooks/useAuth'
import { getUserDetail } from 'src/api/user'
import { getAccessEventsByUID } from 'src/api/access-event'

const UserView = ({ id }) => {
  const auth = useAuth()

  const [userData, setUserData] = useState(null)
  const [accessData, setAccessData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await getUserDetail(auth.accessToken, id)
      setUserData(userRes.data)
      const accessRes = await getAccessEventsByUID(auth.accessToken, id)
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
