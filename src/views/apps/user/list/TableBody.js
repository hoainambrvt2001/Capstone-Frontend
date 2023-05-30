// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Laptop from 'mdi-material-ui/Laptop'
import CogOutline from 'mdi-material-ui/CogOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Components Imports
import RenderClientColumn from '../utils/RenderClientColumn'
import RowOptions from '../utils/RowOptions'

// ** Vars
const userRoleObj = {
  admin: <Laptop sx={{ mr: 2, color: 'error.main' }} />,
  manager: <CogOutline sx={{ mr: 2, color: 'warning.main' }} />,
  subscriber: <AccountOutline sx={{ mr: 2, color: 'primary.main' }} />
}

const columns = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'name',
    headerName: 'User',
    renderCell: ({ row }) => {
      const { id, name, email } = row
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {RenderClientColumn(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Link href={`/apps/user/view/${id}`} passHref>
              <Typography
                noWrap
                component='a'
                variant='subtitle2'
                sx={{ color: 'text.primary', textDecoration: 'none' }}
              >
                {name}
              </Typography>
            </Link>
            <Link href={`/apps/user/view/${id}`} passHref>
              <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                @{email.split('@')[0]}
              </Typography>
            </Link>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.email}
        </Typography>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 150,
    field: 'phone_number',
    headerName: 'Phone number',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.phone_number ? row.phone_number : 'NaN'}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 150,
    headerName: 'Role',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {userRoleObj[row.role.name]}
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.role.name}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => <RowOptions id={row.id} />
  }
]

const TableBody = ({ rowsData, pageSize, setPageSize, pageNumber, setPageNumber }) => {
  return (
    <DataGrid
      autoHeight
      rows={rowsData}
      columns={columns}
      checkboxSelection
      pageSize={pageSize}
      page={pageNumber}
      disableSelectionOnClick
      rowsPerPageOptions={[10, 25, 50]}
      sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
      onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      onPageChange={newPageNumber => setPageNumber(newPageNumber)}
    />
  )
}

export default TableBody
