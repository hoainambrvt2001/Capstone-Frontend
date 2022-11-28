// ** React Imports
import { useState, forwardRef } from 'react'

// ** Next Import
import Image from 'next/image'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

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

export const AlertWithImages = ({ eventType = 'stranger', room, building }) => {
  const [show, setShow] = useState(false)

  // ** Hooks
  const bgClasses = UseBgColor()

  // ** Title
  const cardTitle = eventType === 'stranger' ? 'Alert Stranger Dialog' : 'Alert Ask For Permission'
  const dialogTitle = eventType === 'stranger' ? 'Warning' : 'Ask for permission'
  const dialogDesc =
    eventType === 'stranger'
      ? `A stranger has accessed the room ${building}-${room}`
      : `A stranger want to access the room ${building}-${room}`
  const alertColor = eventType === 'stranger' ? 'warning' : 'info'
  const backgroundTitleColor = eventType === 'stranger' ? bgClasses.warningLight.color : bgClasses.infoLight.color
  const AlertIcon =
    eventType === 'stranger' ? (
      <AlertOutline sx={{ fontSize: '4.5rem', mr: 5 }} />
    ) : (
      <InformationOutline sx={{ fontSize: '4.5rem', mr: 5 }} />
    )

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h6' sx={{ mb: 4 }}>
          {cardTitle}
        </Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogTitle sx={{ px: 0, pt: 0, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem', color: '#FFFFFF' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ display: 'flex', backgroundColor: backgroundTitleColor, color: '#FFFFFF', px: 5, py: 2 }}>
            {AlertIcon}
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
            <Image alt='access-image' src={'/images/stickers/access-event.png'} width={480} height={270} />
            <Image alt='access-image' src={'/images/stickers/access-event.png'} width={480} height={270} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color={alertColor} variant='contained' onClick={() => setShow(false)}>
            Confirm
          </Button>
          <Button color={alertColor} variant='outlined' onClick={() => setShow(false)}>
            More details
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export const AlertWithoutImages = ({ eventType = 'overload', room, building, nowRoomSize = 0, maxRoomSize = 0 }) => {
  const [show, setShow] = useState(false)

  // ** Hooks
  const bgClasses = UseBgColor()

  // ** Title
  const cardTitle = eventType === 'overload' ? 'Alert Overloaded Room' : 'Alert Fire'
  const dialogTitle = eventType === 'overload' ? 'WARNING!' : 'EMERGENCY!'
  const dialogSubTitle = eventType === 'overload' ? 'Overloaded room' : 'Fire in room'
  const dialogDesc =
    eventType === 'overload'
      ? `The room ${building}-${room} is overloaded. There are ${nowRoomSize} people in this room while the maximum capcity of the room is ${maxRoomSize}. You should check it out!`
      : `There is fire in the room ${building}-${room}. Some people will be in danger and you need to take action immediately. Any deplay now can put their lives at risk!`
  const alertColor = eventType === 'overload' ? 'warning' : 'error'
  const bgColor =
    eventType === 'overload' ? bgClasses.warningLight.backgroundColor : bgClasses.errorLight.backgroundColor
  const txtColor = eventType === 'overload' ? 'warning.dark' : 'error.dark'

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h6' sx={{ mb: 4 }}>
          {cardTitle}
        </Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
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
            onClick={() => setShow(false)}
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
          <Button color={alertColor} variant='contained' onClick={() => setShow(false)}>
            <Typography color={'#FFFFFF'} fontWeight={700}>
              Confirm
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}
