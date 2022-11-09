// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'
import PlayCircle from 'mdi-material-ui/PlayCircle'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchAccessEvents } from 'src/store/apps/access-event'
import Image from 'next/image'

// ** Styled component for the link for the avatar with image
const AvatarWithImageLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3)
}))

// ** Styled component for the link for the avatar without image
const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

// ** renders client column
const renderClient = row => {
  if (row.avatar.length) {
    return (
      <AvatarWithImageLink href={`/apps/user/view/${row.id}`}>
        <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
      </AvatarWithImageLink>
    )
  } else {
    return (
      <AvatarWithoutImageLink href={`/apps/user/view/${row.id}`}>
        <CustomAvatar
          skin='light'
          color={row.avatarColor || 'primary'}
          sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
        >
          {getInitials(row.fullName ? row.fullName : 'John Doe')}
        </CustomAvatar>
      </AvatarWithoutImageLink>
    )
  }
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
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
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
          <Link href={`/apps/user/view/${id}`} passHref>
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
      </Menu>
    </>
  )
}

const CameraModel = ({ handleCloseModel, cameraModel }) => {
  return (
    <Dialog
      open={cameraModel.showModel}
      onClose={handleCloseModel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{`Check-in/out images of ${cameraModel.userName}`}</DialogTitle>
      <DialogContent>
        <Image
          src={cameraModel.imgUrl ? cameraModel.imgUrl : '/images/stickers/access-event.jpg'}
          width={1280}
          height={720}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModel}>Close</Button>
        <Button onClick={handleCloseModel} variant='contained'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const AnalyticsAccessEvent = () => {
  // ** State
  const [pageSize, setPageSize] = useState(10)
  const [cameraModel, setCameraModel] = useState({
    imgUrl: '',
    showModel: false,
    userName: ''
  })

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.access_event)
  useEffect(() => {
    dispatch(fetchAccessEvents({}))
  }, [dispatch])

  // ** Handle interact with model
  const handleOpenModel = (imgUrl, userName) => {
    setCameraModel({
      imgUrl,
      showModel: true,
      userName
    })
  }

  const handleCloseModel = () => {
    setCameraModel({
      imgUrl: '',
      showModel: false,
      userName: ''
    })
  }

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'fullName',
      headerName: 'User',
      renderCell: ({ row }) => {
        const { id, fullName, email } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(row)}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Link href={`/apps/user/view/${id}`} passHref>
                <Typography
                  noWrap
                  component='a'
                  variant='subtitle2'
                  sx={{ color: 'text.primary', textDecoration: 'none' }}
                >
                  {fullName}
                </Typography>
              </Link>
              <Link href={`/apps/user/view/${id}`} passHref>
                <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                  {email}
                </Typography>
              </Link>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 160,
      field: 'contact',
      headerName: 'Mobile',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.contact}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 100,
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
      minWidth: 180,
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
      minWidth: 120,
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
      minWidth: 100,
      field: 'time',
      headerName: 'Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.time}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 150,
      field: 'date',
      headerName: 'Date',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.date}
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
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Box
              sx={{
                p: 5,
                pb: 3
              }}
            >
              <Typography variant='h6'>Room Access Activity</Typography>
            </Box>
            <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Card>
        </Grid>
      </Grid>
      <CameraModel handleCloseModel={handleCloseModel} cameraModel={cameraModel} />
    </Box>
  )
}

export default AnalyticsAccessEvent
