// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import Door from 'mdi-material-ui/Door'

// ** Demo Tabs Imports
import EventForm from './EventForm'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  marginLeft: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const EventView = ({ id, isEdited, eventData = null, listRooms }) => {
  // ** State
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!eventData) setError(true)
  }, [])

  if (eventData) {
    return (
      <Card>
        <TabContext value={'event'}>
          <TabList
            aria-label='event-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              value='event'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Door sx={{ fontSize: '1.125rem' }} />
                  <TabName>Event</TabName>
                </Box>
              }
            />
          </TabList>
          <TabPanel sx={{ p: 0 }} value='event'>
            <EventForm id={id} isEdited={isEdited} eventData={eventData} listRooms={listRooms} />
          </TabPanel>
        </TabContext>
      </Card>
    )
  } else if (error) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            Event with the id: {id} does not exist. Please check the list of events:{' '}
            <Link href='/apps/event/list'>Event List</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default EventView
