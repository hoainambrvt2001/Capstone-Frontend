// ** Component Imports:
import RowOptions from '../utils/RowOptions'

// ** MUI Imports
import { DataGrid } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Icons Imports
import Image from 'mdi-material-ui/Image'

// ** Function Imports
import { capitalizeFirstLetter, customizeRenderDateTime } from 'src/functions'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { openImageDialog } from 'src/store/apps/image-dialog'

const TableBody = ({ rowsData, pageSize, setPageSize, pageNumber, setPageNumber }) => {
  const dispatch = useDispatch()

  const handleViewAbnormalImages = eventInfo => {
    const renderDate = customizeRenderDateTime(eventInfo.occurred_time)
    dispatch(
      openImageDialog({
        title: `Captured images on ${renderDate} at ${eventInfo.room.name} room`,
        images: eventInfo.images
      })
    )
  }

  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: 'abnormal_type',
      headerName: 'Type',
      renderCell: ({ row }) => {
        const { name } = row.abnormal_type
        return (
          <Typography noWrap variant='body2'>
            {capitalizeFirstLetter(name)}
          </Typography>
        )
      }
    },
    {
      flex: 0.06,
      minWidth: 50,
      field: 'images',
      headerName: 'Image',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <IconButton size='small' onClick={() => handleViewAbnormalImages(row)}>
              <Image sx={{ color: 'primary.main', fontSize: '2.5rem' }} />
            </IconButton>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'room',
      headerName: 'Room',
      renderCell: ({ row }) => {
        const { name } = row.room
        return (
          <Typography noWrap variant='body2'>
            {name}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 100,
      field: 'occurred_time',
      headerName: 'Occurred Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.occurred_time)}
          </Typography>
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

  return (
    <DataGrid
      autoHeight
      rows={rowsData}
      columns={columns}
      checkboxSelection
      pageSize={pageSize}
      disableSelectionOnClick
      rowsPerPageOptions={[10, 20, 40]}
      sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
      onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      page={pageNumber}
      onPageChange={newPageNumber => setPageNumber(newPageNumber)}
    />
  )
}

export default TableBody
