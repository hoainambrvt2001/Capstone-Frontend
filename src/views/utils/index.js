// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

// ** Customize Access Image Model
export const CameraModel = ({ handleCloseModel, cameraModel, isAccessEvent }) => {
  return (
    <Dialog
      open={cameraModel.showModel}
      onClose={handleCloseModel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        {isAccessEvent ? `Check-in/out images of ${cameraModel.userName}` : `Abnormal recoreded images`}
      </DialogTitle>
      <DialogContent>
        <Image
          alt='captured image'
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
