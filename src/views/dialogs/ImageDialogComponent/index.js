// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { closeImageDialog } from 'src/store/apps/image-dialog'

// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'

// ** Customize Access Image Model
const ImageDialog = () => {
  const dispatch = useDispatch()
  const dialogSlice = useSelector(state => state.image_dialog)

  // ** Handle functions:
  const onCloseDialog = () => {
    dispatch(closeImageDialog())
  }

  return (
    <Dialog
      open={dialogSlice.isShow}
      onClose={onCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{dialogSlice.title}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {dialogSlice.images.length !== 0 ? (
            dialogSlice.images.map((image, index) => {
              return (
                <Image
                  key={index}
                  alt={image.name}
                  src={image.url}
                  width={500}
                  height={375}
                  style={{ margin: '20px' }}
                />
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

export default ImageDialog
