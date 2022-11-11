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
import AddRoomForm from './AddRoomForm'

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

const AddRoomView = () => {
  return (
    <Card>
      <TabContext value={'room'}>
        <TabList aria-label='room-settings tabs' sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
          <Tab
            value='room'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Door sx={{ fontSize: '1.125rem' }} />
                <TabName>Room</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='room'>
          <AddRoomForm />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AddRoomView
