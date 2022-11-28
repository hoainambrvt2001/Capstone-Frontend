// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Tab Content Imports
import DialogTab from './DialogTab'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const EditRoleModal = ({ showEdit, handleCloseEdit, handleSave, defaultRole }) => {
  const [role, setRole] = useState(defaultRole)

  useEffect(() => {
    setRole(defaultRole)

    return () => {
      setRole('admin')
    }
  }, [defaultRole])

  const handleChange = e => {
    setRole(e.target.value)
  }

  return (
    <Card>
      <Dialog
        fullWidth
        open={showEdit}
        scroll='body'
        maxWidth='md'
        onClose={handleCloseEdit}
        onBackdropClick={handleCloseEdit}
        TransitionComponent={Transition}
      >
        <DialogContent
          sx={{
            position: 'relative',
            pr: { xs: 5, sm: 12 },
            pl: { xs: 4, sm: 11 },
            pt: { xs: 8, sm: 12.5 },
            pb: { xs: 5, sm: 12.5 }
          }}
        >
          <IconButton size='small' onClick={handleCloseEdit} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <Close />
          </IconButton>
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3, lineHeight: '2rem' }}>
              Edit User Role
            </Typography>
            <Typography variant='body2'>Edit role as per your requirements.</Typography>
          </Box>
          <DialogTab role={role} setRole={setRole} handleChange={handleChange} />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label='Notify user via email about role changed?'
            sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
          />
          <Box sx={{ mt: 8.5, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            <Button variant='outlined' color='secondary' onClick={handleCloseEdit}>
              Cancel
            </Button>
            <Button variant='contained' color='primary' onClick={() => handleSave(role)}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default EditRoleModal
