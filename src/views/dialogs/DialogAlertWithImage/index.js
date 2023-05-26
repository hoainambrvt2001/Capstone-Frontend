// ** React Imports
import { forwardRef } from 'react'

// ** Redux Imports:
import { useDispatch, useSelector } from 'react-redux'
import { closeAlertWithImage } from 'src/store/apps/alert-with-image'

// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import AlertOutline from 'mdi-material-ui/AlertOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import Close from 'mdi-material-ui/Close'

// ** Hooks
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Constants
import { ABNORMAL_EVENT_TYPE } from 'src/utils/constants'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const DialogAlertWithImage = () => {
  // ** Redux
  const dispatch = useDispatch()
  const alertSlice = useSelector(state => state.alert_with_image)

  // ** Handle function:
  const onCloseAlert = () => {
    dispatch(closeAlertWithImage())
  }
  // ** Hooks
  const bgClasses = UseBgColor()

  if (!alertSlice.data) return <div></div>

  // ** Title
  let dialogTitle, dialogDesc, alertColor, bgColor, alertIcon

  if (alertSlice.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.STRANGER) {
    dialogTitle = 'Warning!'
    dialogDesc = `A stranger has accessed the ${alertSlice.data.room_name} room`
    alertColor = 'warning'
    bgColor = bgClasses.warningLight.color
    alertIcon = <AlertOutline sx={{ fontSize: '4.5rem', mr: 5 }} />
  } else {
    dialogTitle = 'Ask for permission'
    dialogDesc = `A stranger wants to access the ${alertSlice.data.room_name} room`
    alertColor = 'info'
    bgColor = bgClasses.infoLight.color
    alertIcon = <InformationOutline sx={{ fontSize: '4.5rem', mr: 5 }} />
  }

  return (
    <Dialog
      fullWidth
      open={alertSlice.isShow}
      maxWidth='md'
      scroll='body'
      onClose={onCloseAlert}
      TransitionComponent={Transition}
    >
      <DialogTitle sx={{ px: 0, pt: 0, position: 'relative' }}>
        <IconButton
          size='small'
          onClick={onCloseAlert}
          sx={{ position: 'absolute', right: '1rem', top: '1rem', color: '#FFFFFF' }}
        >
          <Close />
        </IconButton>
        <Box sx={{ display: 'flex', backgroundColor: bgColor, color: '#FFFFFF', px: 5, py: 2 }}>
          {alertIcon}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography color={'#FFFFFF'} fontWeight={700} variant='h4'>
              {dialogTitle}
            </Typography>
            <Typography color={'#FFFFFF'} variant='subtitle1'>
              {dialogDesc}
              <span style={{ fontWeight: 700, cursor: 'pointer' }}>{' - check it out!'}</span>
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {alertSlice.data.images.map((image, index) => {
            return <Image key={index} alt={image.name} src={image.url} width={480} height={270} />
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color={alertColor} variant='contained' onClick={onCloseAlert}>
          Confirm
        </Button>
        <Button color={alertColor} variant='outlined' onClick={onCloseAlert}>
          More details
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogAlertWithImage
