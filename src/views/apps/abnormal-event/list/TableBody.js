// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import PlayCircle from 'mdi-material-ui/PlayCircle'

// ** Store Imports
import { useDispatch } from 'react-redux'

// ** Actions Imports
import { deleteRoom } from 'src/store/apps/room'

// ** Function Imports
import { capitalizeFirstLetter, customizeRenderDateTime } from 'src/functions'

// ** Styled component for the link inside menu
const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

const RowOptions = ({ id }) => {
  // ** Hooks
  const dispatch = useDispatch()

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteRoom(id))
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem sx={{ p: 0 }}>
          <Link href={`/apps/room/view/${id}`} passHref>
            <MenuItemLink>
              <EyeOutline fontSize='small' sx={{ mr: 2 }} />
              View
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose}>
          <PencilOutline fontSize='small' sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const TableBody = ({ rowsData, pageSize, setPageSize, handleOpenModel }) => {
  const columns = [
    {
      flex: 0.1,
      minWidth: 100,
      field: 'type',
      headerName: 'Type',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {capitalizeFirstLetter(row.type)}
          </Typography>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 50,
      field: 'images',
      headerName: 'Camera',
      renderCell: ({ row }) => {
        return (
          <IconButton size='small' onClick={() => handleOpenModel(row.images[0].url)}>
            <PlayCircle sx={{ color: 'primary.main', fontSize: '2.5rem' }} />
          </IconButton>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'room',
      headerName: 'Room'
    },
    {
      flex: 0.1,
      minWidth: 100,
      field: 'building',
      headerName: 'Building'
    },
    {
      flex: 0.2,
      minWidth: 100,
      field: 'occurTime',
      headerName: 'Occurred Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.occurTime)}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 140,
      field: 'solveTime',
      headerName: 'Solved Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.solveTime)}
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
    />
  )
}

export default TableBody
