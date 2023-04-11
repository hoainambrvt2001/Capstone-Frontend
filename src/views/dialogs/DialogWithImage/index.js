// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { closeDialogImage } from 'src/store/apps/dialog-image'

// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

// ** Customize Access Image Model
const DialogWithImage = () => {
  const dispatch = useDispatch()
  const dialogSlice = useSelector(state => state.dialog_image)

  // ** Handle functions:
  const onCloseDialog = () => {
    dispatch(closeDialogImage())
  }

  return (
    <Dialog
      open={dialogSlice.isShow}
      onClose={onCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      fullWidth
    >
      <DialogTitle id='alert-dialog-title'>{dialogSlice.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {dialogSlice.images.length !== 0 ? (
            dialogSlice.images.map((image, index) => {
              return (
                <Box sx={{ margin: '10px' }}>
                  <Image key={index} alt={image.name} src={image.url} width={500} height={375} />
                </Box>
              )
            })
          ) : (
            <Image alt='sample image' src={'/images/stickers/access-event.png'} width={1280} height={720} />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog}>Close</Button>
        <Button onClick={onCloseDialog} variant='contained'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogWithImage
