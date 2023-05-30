// ** React Import
import { useState, useEffect } from 'react'
import { getUserDetail } from 'src/api/user'

// **  Components Imports
import { useAuth } from 'src/hooks/useAuth'

// **  Components Imports
import UserView from 'src/views/apps/user/utils/UserView'

const EditUser = ({ id }) => {
  const auth = useAuth()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await getUserDetail(auth.accessToken, id)
      setUserData(userRes.data)
    }
    fetchData()

    return () => {}
  }, [auth.accessToken, id])

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
