// ** React Imports
import { forwardRef } from 'react'

// ** Redux Imports:
import { useDispatch, useSelector } from 'react-redux'
import { closeAlertWithoutImage } from 'src/store/apps/alert-without-image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Hooks
import UseBgColor from 'src/@core/hooks/useBgColor'

// ** Constants
import { ABNORMAL_EVENT_TYPE } from 'src/constants'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const AlertWithoutImages = () => {
  // ** Redux
  const dispatch = useDispatch()
  const alertSlice = useSelector(state => state.alert_without_image)

  // ** Handle function:
  const onCloseAlert = () => {
    dispatch(closeAlertWithoutImage())
  }

  // ** Hooks
  const bgClasses = UseBgColor()

  if (!alertSlice.data) return <div></div>

  // ** Title
  let dialogTitle, dialogSubTitle, dialogDesc, alertColor, bgColor, txtColor

  if (alertSlice.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.OVERCROWD) {
    dialogTitle = 'WARNING'
    dialogSubTitle = 'Overcrowded room'
    dialogDesc = `The ${alertSlice.data.room.name} room is overcrowded. The number of people has exceeded the maximum occupancy  of the room: ${alertSlice.data.room.max_occupancy} persons. You should check it out!`
    alertColor = 'warning'
    bgColor = bgClasses.warningLight.backgroundColor
    txtColor = 'warning.dark'
  } else if (alertSlice.data.abnormal_type_id === ABNORMAL_EVENT_TYPE.FIRE) {
    dialogTitle = 'EMERGENCY'
    dialogSubTitle = 'Fire in room'
    dialogDesc = `There is fire in the ${room} room. Some people will be in danger and you need to take action immediately. Any deplay now can put their lives at risk!`
    alertColor = 'error'
    bgColor = bgClasses.errorLight.backgroundColor
    txtColor = 'error.dark'
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
      <DialogTitle sx={{ position: 'relative', backgroundColor: bgColor }}>
        <Typography variant='h5' color={txtColor} fontWeight={600}>
          {dialogTitle}
        </Typography>
        <Typography variant='h3' color={txtColor} fontWeight={700}>
          {dialogSubTitle}
        </Typography>
        <IconButton
          size='small'
          onClick={onCloseAlert}
          sx={{ position: 'absolute', right: '1rem', top: '1rem', color: txtColor }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: bgColor }}>
        <Typography color={txtColor} variant='h6'>
          {dialogDesc}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: bgColor }}>
        <Button color={alertColor} variant='contained' onClick={onCloseAlert}>
          <Typography color={'#FFFFFF'} fontWeight={700}>
            Confirm
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AlertWithoutImages
