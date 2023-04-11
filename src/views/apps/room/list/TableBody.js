// ** MUI Imports
import { DataGrid } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import RowOptions from '../utils/RowOptions'

// ** Vars
const roomStatusObj = {
  available: 'success',
  maintenance: 'warning',
  unavailable: 'secondary'
}

const roomTypeObj = {
  'public-room': 'primary.light',
  'private-room': 'error.light'
}

const roomTypeNameObj = {
  'public-room': 'Public room',
  'private-room': 'Private room'
}

const columns = [
  {
    flex: 0.2,
    minWidth: 120,
    field: 'name',
    headerName: 'Name'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'max_occupancy',
    headerName: 'Max occupancy'
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'room_type',
    headerName: 'Type',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2' color={roomTypeObj[row.room_type.name]} fontWeight={700}>
          {roomTypeNameObj[row.room_type.name]}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 140,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => {
      return (
        <CustomChip
          skin='light'
          size='small'
          label={row.status}
          color={roomStatusObj[row.status]}
          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
        />
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
      rowsPerPageOptions={[10, 20, 40]}
      sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
      onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      onPageChange={newPageNumber => setPageNumber(newPageNumber)}
    />
  )
}

export default TableBody
