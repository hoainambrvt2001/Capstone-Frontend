// ** Next Imports
import Image from 'next/image'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const TotalEventCard = ({ eventNumber, eventName, eventImg, imgWidth }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'start' }}>
            <Typography variant='h4' color='text.primary'>
              {eventNumber}
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              {eventName}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Image src={`/images/stickers/${eventImg}.png`} width={imgWidth} height={150} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default TotalEventCard
