// ** Redux Import
import { useDispatch } from 'react-redux'
import { raiseDialogImage } from 'src/store/apps/dialog-image'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import Image from 'mdi-material-ui/Image'

// ** Function Imports
import { capitalizeFirstLetter, customizeRenderDateTime } from 'src/functions'

// ** Component Imports
import RowOptions from '../utlis/RowOptions'
import RenderClientColumn from '../../user/utils/RenderClientColumn'

const TableBody = ({ rowsData, pageNumber, setPageNumber, pageSize, setPageSize }) => {
  const dispatch = useDispatch()

  const handleViewRegisterFace = user => {
    dispatch(
      raiseDialogImage({
        title: `Registered faces of ${user.name}`,
        images: user.registered_faces
      })
    )
  }

  const columns = [
    {
      flex: 0.25,
      minWidth: 250,
      field: 'user',
      headerName: 'User',
      renderCell: ({ row }) => {
        const { id, name, email } = row.user
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {RenderClientColumn(row.user)}
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
                  @{email}
                </Typography>
              </Link>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.15,
      minWidth: 50,
      field: 'registered_faces',
      headerName: 'Registered Face',
      renderCell: ({ row }) => {
        return (
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton size='small' onClick={() => handleViewRegisterFace(row.user)}>
              <Image sx={{ color: 'primary.main', fontSize: '2.5rem' }} />
            </IconButton>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 100,
      field: 'requested_time',
      headerName: 'Requested Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.requested_time)}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'status',
      headerName: 'Status',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {capitalizeFirstLetter(row.status)}
          </Typography>
        )
      }
    },
    {
      flex: 0.3,
      minWidth: 100,
      field: 'note',
      headerName: 'Note',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.note}
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
