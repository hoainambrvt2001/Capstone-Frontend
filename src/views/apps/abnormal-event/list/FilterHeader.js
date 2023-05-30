// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// ** Constant Imports:
import { ABNORMAL_EVENT_TYPE } from 'src/utils/constants'

const FilterHeader = ({ handleTypeChange, handleRoomChange, type, room, allRooms }) => {
  return (
    <Card>
      <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='room-select'>Select Room</InputLabel>
              <Select
                fullWidth
                value={room}
                id='select-room'
                label='Select Room'
                labelId='room-select'
                onChange={handleRoomChange}
                inputProps={{ placeholder: 'Select Room' }}
              >
                <MenuItem value=''>Select Room</MenuItem>
                {allRooms.map(room => {
                  return (
                    <MenuItem value={room.id} key={room.id}>
                      {room.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='type-select'>Select Type</InputLabel>
              <Select
                fullWidth
                value={type}
                id='select-type'
                label='Select Type'
                labelId='type-select'
                onChange={handleTypeChange}
                inputProps={{ placeholder: 'Select Type' }}
              >
                <MenuItem value=''>Select Type</MenuItem>
                <MenuItem value={ABNORMAL_EVENT_TYPE.STRANGER}>Stranger</MenuItem>
                <MenuItem value={ABNORMAL_EVENT_TYPE.OVERCROWD}>Overcrowd</MenuItem>
                <MenuItem value={ABNORMAL_EVENT_TYPE.FIRE}>Fire</MenuItem>
                <MenuItem value={ABNORMAL_EVENT_TYPE.OTHER}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FilterHeader
