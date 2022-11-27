// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Menu from '@mui/material/Menu'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// ** Icons Imports

import PlayCircle from 'mdi-material-ui/PlayCircle'
import ChevronDown from 'mdi-material-ui/ChevronDown'

// ** Actions Imports
import { customizeRenderDateTime } from 'src/functions'

const UsersRoomAccessTable = ({ accessData, handleOpenModel }) => {
  // ** State
  const [pageSize, setPageSize] = useState(10)
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Var
  const open = Boolean(anchorEl)

  // ** Handle actions:
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    {
      flex: 0.2,
      minWidth: 90,
      field: 'building',
      headerName: 'Building',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.building}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 70,
      field: 'room',
      headerName: 'Room',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.room}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 90,
      field: 'accessImg',
      headerName: 'Camera',
      renderCell: ({ row }) => {
        return (
          <IconButton size='small' onClick={() => handleOpenModel(row.accessImg, row.fullName)}>
            <PlayCircle sx={{ color: 'primary.main', fontSize: '2.5rem' }} />
          </IconButton>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 160,
      field: 'credential',
      headerName: 'Credential',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.credential}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 110,
      field: 'result',
      headerName: 'Result',
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            variant='body2'
            fontWeight={600}
            sx={{ color: row.result === 'Granted' ? 'success.main' : 'error.main' }}
          >
            {row.result}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 200,
      field: 'time',
      headerName: 'Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.time)}
          </Typography>
        )
      }
    }
  ]

  return (
    <Card>
      <CardHeader
        title='Room Access History'
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        titleTypographyProps={{
          variant: 'h6',
          sx: { lineHeight: '32px !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <>
            <Button
              variant='contained'
              aria-haspopup='true'
              onClick={handleClick}
              endIcon={<ChevronDown />}
              aria-expanded={open ? 'true' : undefined}
              aria-controls={open ? 'user-view-overview-export' : undefined}
            >
              Export
            </Button>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
              <MenuItem onClick={handleClose}>PDF</MenuItem>
              <MenuItem onClick={handleClose}>XLSX</MenuItem>
              <MenuItem onClick={handleClose}>CSV</MenuItem>
            </Menu>
          </>
        }
      />
      <DataGrid
        autoHeight
        rows={accessData.data}
        columns={columns}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default UsersRoomAccessTable
