// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import ContentCopy from 'mdi-material-ui/ContentCopy'
import axios from 'axios'

const RolesCards = () => {
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    const fetchCardData = async () => {
      await axios
        .get('/apps/user/roles')
        .then(res => res.data.data)
        .then(data => setCardData(data))
    }
    fetchCardData()
  }, [])

  const renderPermission = role => {
    if (role === 'Administrators') return 'System, Private and Public Room'
    if (role === 'Managers') return 'Both Private and Public Room'
    if (role === 'Subscribers') return 'Only Public Room'
  }

  return (
    <Grid container spacing={6} className='match-height'>
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}>
          <Card>
            <CardContent>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='body2'>Total {item.totalUsers} users</Typography>
                <AvatarGroup
                  max={4}
                  sx={{
                    '& .MuiAvatarGroup-avatar': { fontSize: '.875rem' },
                    '& .MuiAvatar-root, & .MuiAvatarGroup-avatar': { width: 40, height: 40 }
                  }}
                >
                  {item.avatars.map((img, index) => (
                    <Avatar key={index} alt={item.title} src={img ? img : '/images/avatars/6.png'} />
                  ))}
                </AvatarGroup>
              </Box>
              <Box>
                <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                  {item.title}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='body2' sx={{ color: 'primary.main', cursor: 'pointer' }}>
                  {renderPermission(item.title)}
                </Typography>
                <IconButton size='small'>
                  <ContentCopy />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default RolesCards
