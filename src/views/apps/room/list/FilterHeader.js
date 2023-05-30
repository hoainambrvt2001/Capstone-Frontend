// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { ROOM_TYPE } from 'src/utils/constants'

const FilterHeader = ({ handleTypeChange, handleStatusChange, type, status }) => {
  return (
    <Card>
      <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <CardContent>
        <Grid container spacing={6}>
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
                <MenuItem value={ROOM_TYPE.PUBLIC}>Public</MenuItem>
                <MenuItem value={ROOM_TYPE.PRIVATE}>Private</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='status-select'>Select Status</InputLabel>
              <Select
                fullWidth
                value={status}
                id='select-status'
                label='Select Status'
                labelId='status-select'
                onChange={handleStatusChange}
                inputProps={{ placeholder: 'Select Status' }}
              >
                <MenuItem value=''>Select Status</MenuItem>
                <MenuItem value='available'>Available</MenuItem>
                <MenuItem value='maintenance'>Maintenance</MenuItem>
                <MenuItem value='unavailable'>Unavailable</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FilterHeader
