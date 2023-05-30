// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { useRouter } from 'next/router'

const roleColors = {
  admin: 'error',
  manager: 'warning',
  subscriber: 'primary'
}

const UserViewLeft = ({ id, userData }) => {
  // * Next router
  const router = useRouter()

  // Handle Edit dialog
  const handleEditUser = () => {
    router.push(`/apps/user/edit/${id}`)
  }

  const renderUserAvatar = () => {
    if (userData) {
      if (userData.photo_url) {
        return (
          <CustomAvatar
            alt='User Image'
            src={userData.photo_url}
            variant='rounded'
            sx={{ width: 120, height: 120, mb: 4 }}
          />
        )
      } else {
        return (
          <CustomAvatar
            skin='light'
            variant='rounded'
            color={'primary'}
            sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
          >
            {getInitials(userData.name)}
          </CustomAvatar>
        )
      }
    } else {
      return null
    }
  }

  if (userData) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {renderUserAvatar()}
              <Typography variant='h6' sx={{ mb: 4 }}>
                {userData.name}
              </Typography>
              <CustomChip
                skin='light'
                size='small'
                label={userData.role.name}
                color={roleColors[userData.role.name]}
                sx={{
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  textTransform: 'capitalize',
                  '& .MuiChip-label': { mt: -0.25 }
                }}
              />
            </CardContent>

            <CardContent>
              <Typography variant='h6'>Details</Typography>
              <Divider sx={{ mt: 4 }} />
              <Box sx={{ pt: 2, pb: 1 }}>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Username:
                  </Typography>
                  <Typography variant='body2'>@{userData.email.split('@')[0]}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Email:
                  </Typography>
                  <Typography variant='body2'>{userData.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Phone number:</Typography>
                  <Typography variant='body2'>{userData.phone_number ? userData.phone_number : 'NaN'}</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Company:</Typography>
                  <Typography variant='body2'>{data.company}</Typography>
                </Box> */}
                {/* <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Country:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {data.country}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Address:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {data.address}
                  </Typography>
                </Box> */}
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Role:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {userData.role.name}
                  </Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Birthday:</Typography>
                  <Typography variant='body2'>{data.birthday}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Gender:</Typography>
                  <Typography variant='body2'>{data.gender}</Typography>
                </Box> */}
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Language:</Typography>
                  <Typography variant='body2'>English</Typography>
                </Box>
              </Box>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditUser}>
                Edit
              </Button>
              <Button color='error' variant='outlined'>
                Suspend
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserViewLeft
