// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'
import Image from 'next/image'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

// ** Demo Components Imports
import UserViewLeft from 'src/views/apps/user/view/UserViewLeft'
import UserViewRight from 'src/views/apps/user/view/UserViewRight'

// ** Customize Access Image Model
const CameraModel = ({ handleCloseModel, cameraModel }) => {
  return (
    <Dialog
      open={cameraModel.showModel}
      onClose={handleCloseModel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{`Check-in/out images of ${cameraModel.userName}`}</DialogTitle>
      <DialogContent>
        <Image
          src={cameraModel.imgUrl ? cameraModel.imgUrl : '/images/stickers/access-event.png'}
          width={1280}
          height={720}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModel}>Close</Button>
        <Button onClick={handleCloseModel} variant='contained'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const UserView = ({ id, userData = null, accessData = null }) => {
  // ** State
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!userData) setError(true)
  }, [])

  const [cameraModel, setCameraModel] = useState({
    imgUrl: '',
    showModel: false,
    userName: ''
  })

  // ** Handle interact with model
  const handleOpenModel = (imgUrl, userName) => {
    setCameraModel({
      imgUrl,
      showModel: true,
      userName
    })
  }

  const handleCloseModel = () => {
    setCameraModel({
      imgUrl: '',
      showModel: false,
      userName: ''
    })
  }

  if (userData) {
    return (
      <Box>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5} lg={4}>
            <UserViewLeft data={userData} id={id} />
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <UserViewRight accessData={accessData} handleOpenModel={handleOpenModel} />
          </Grid>
        </Grid>
        <CameraModel handleCloseModel={handleCloseModel} cameraModel={cameraModel} />
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
