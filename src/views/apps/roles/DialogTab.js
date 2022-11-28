// ** MUI Imports
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Laptop from 'mdi-material-ui/Laptop'
import CogOutline from 'mdi-material-ui/CogOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Custom Avatar Component
import CustomAvatar from 'src/@core/components/mui/avatar'

const DialogTab = ({ role, setRole, handleChange }) => {
  return (
    <Box>
      <Typography variant='h6' sx={{ mb: 4 }}>
        Select Role
      </Typography>
      <Box sx={{ mb: 8 }}>
        <Box
          onClick={() => setRole('admin')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='error' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <Laptop />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Administrator</Typography>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                Manage the system and have access to all rooms.
              </Typography>
            </Box>
          </Box>
          <Radio value='admin' onChange={handleChange} checked={role === 'admin'} />
        </Box>

        <Box
          onClick={() => setRole('manager')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <CogOutline />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Manager</Typography>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                {'Have access to all Private and Public rooms.'}
              </Typography>
            </Box>
          </Box>
          <Radio value='manager' onChange={handleChange} checked={role === 'manager'} />
        </Box>
        <Box
          onClick={() => setRole('subscriber')}
          sx={{ mb: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar skin='light' color='primary' variant='rounded' sx={{ mr: 3, width: 48, height: 48 }}>
              <AccountOutline />
            </CustomAvatar>
            <Box>
              <Typography sx={{ color: 'text.secondary' }}>Subscriber</Typography>
              <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                {'Have access to all Public rooms.'}
              </Typography>
            </Box>
          </Box>
          <Radio value='subscriber' onChange={handleChange} checked={role === 'subscriber'} />
        </Box>
      </Box>
    </Box>
  )
}

export default DialogTab
