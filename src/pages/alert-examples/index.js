import Grid from '@mui/material/Grid'
import { AlertWithImages, AlertWithoutImages } from 'src/views/utils'

const Page = () => {
  const building = 'B4'
  const room = '303'

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithImages eventType='stranger' building={building} room={room} />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithImages eventType='ask-for-permission' building={building} room={room} />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithoutImages eventType='overload' building={building} room={room} nowRoomSize={151} maxRoomSize={150} />
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <AlertWithoutImages eventType='fire' building={building} room={room} />
      </Grid>
    </Grid>
  )
}

export default Page
