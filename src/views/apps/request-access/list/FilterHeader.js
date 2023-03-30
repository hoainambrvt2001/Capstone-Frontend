// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const FilterHeader = ({ handleStatusChange, status }) => {
  const REQUEST_ACCESS_STATUS = {
    PENDING: 'pending',
    ACCEPTED: 'accepted',
    DECLINED: 'declined',
    CANCELED: 'canceled'
  }
  return (
    <Card>
      <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <CardContent>
        <Grid container spacing={6}>
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
                <MenuItem value={REQUEST_ACCESS_STATUS.PENDING}>Pending</MenuItem>
                <MenuItem value={REQUEST_ACCESS_STATUS.ACCEPTED}>Accepted</MenuItem>
                <MenuItem value={REQUEST_ACCESS_STATUS.DECLINED}>Declined</MenuItem>
                <MenuItem value={REQUEST_ACCESS_STATUS.CANCELED}>Canceled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FilterHeader
