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

// ** Store Imports
import { useDispatch } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Actions Imports
import { deleteRoom } from 'src/store/apps/room'

// ** Function Imports
import { capitalizeFirstLetter } from 'src/functions'

// ** Vars
const roomStatusObj = {
  available: 'success',
  maintenance: 'warning',
  unavailable: 'secondary'
}

const roomTypeObj = {
  public: 'primary.light',
  private: 'error.light'
}

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
        <MenuItem sx={{ p: 0 }}>
          <Link href={`/apps/room/edit/${id}`} passHref>
            <MenuItemLink>
              <PencilOutline fontSize='small' sx={{ mr: 2 }} />
              Edit
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

const columns = [
  {
    flex: 0.2,
    minWidth: 120,
    field: 'code',
    headerName: 'Room code'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'name',
    headerName: 'Room name'
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'building',
    headerName: 'Building name'
  },
  {
    flex: 0.2,
    minWidth: 150,
    field: 'capacity',
    headerName: 'Capacity (Person)'
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'type',
    headerName: 'Type',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2' color={roomTypeObj[row.type]} fontWeight={700}>
          {capitalizeFirstLetter(row.type)}
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

const TableBody = ({ rowsData, pageSize, setPageSize }) => {
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
