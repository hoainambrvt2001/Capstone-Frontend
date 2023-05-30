// ** MUI Imports
import { InputAdornment } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Magnify } from 'mdi-material-ui'

// ** Icons Imports
import ExportVariant from 'mdi-material-ui/ExportVariant'
import Link from 'next/link'

const TableHeader = props => {
  // ** Props
  const { handleFilter, value } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button sx={{ mr: 4, mb: 2 }} color='secondary' variant='outlined' startIcon={<ExportVariant fontSize='small' />}>
        Export
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder='Search User'
          onChange={e => handleFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />

        <Link passHref href='/apps/user/add'>
          <Button sx={{ mb: 2 }} variant='contained'>
            Add User
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default TableHeader
