// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const FilterHeader = ({ handleRoleChange, role }) => {
  return (
    <Card>
      <CardHeader title='Search Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id='role-select'>Select Role</InputLabel>
              <Select
                fullWidth
                value={role}
                id='select-role'
                label='Select Role'
                labelId='role-select'
                onChange={handleRoleChange}
                inputProps={{ placeholder: 'Select Role' }}
              >
                <MenuItem value=''>Select Role</MenuItem>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='manager'>Manager</MenuItem>
                <MenuItem value='subscriber'>Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FilterHeader
