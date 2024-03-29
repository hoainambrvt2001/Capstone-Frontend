// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

// ** Demo Components Imports
import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from 'src/views/apps/user/view/UserViewRight'

const UserView = ({ id, userData = null, accessData = null }) => {
  // ** State
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!userData) setError(true)
  }, [])

  if (userData) {
    return (
      <Box>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5} lg={4}>
            <UserViewLeft userData={userData} id={id} />
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <UserViewRight accessData={accessData} />
          </Grid>
        </Grid>
      </Box>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            User with the id: {id} does not exist. Please check the list of users:{' '}
            <Link href='/apps/user/list'>User List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserView
