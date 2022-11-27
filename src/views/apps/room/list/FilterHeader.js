// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const FilterHeader = ({
  handleBuildingChange,
  handleTypeChange,
  handleStatusChange,
  building,
  type,
  status,
  allBuildings
}) => {
  return (
    <Card>
      <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='building-select'>Select Building</InputLabel>
              <Select
                fullWidth
                value={building}
                id='select-building'
                label='Select Building'
                labelId='building-select'
                onChange={handleBuildingChange}
                inputProps={{ placeholder: 'Select Building' }}
              >
                <MenuItem value=''>Select Building</MenuItem>
                {allBuildings.map((building, idx) => {
                  return (
                    <MenuItem value={building} key={idx}>
                      {building}
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
                <MenuItem value='public'>Public</MenuItem>
                <MenuItem value='private'>Private</MenuItem>
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
