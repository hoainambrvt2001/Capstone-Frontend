// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import Check from 'mdi-material-ui/Check'
import Close from 'mdi-material-ui/Close'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import DeleteOutline from 'mdi-material-ui/DeleteOutline'

// ** Store Imports
import { useDispatch } from 'react-redux'

// ** Actions Imports
import { useAuth } from 'src/hooks/useAuth'
import { modifyRequestAccess, removeRequestAccess } from 'src/store/apps/request-access'

const RowOptions = ({ id }) => {
  // ** Auth
  const auth = useAuth()

  // ** Hooks
  const dispatch = useDispatch()

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleChangeRequestStatus = value => {
    const updateDto = { token: auth.accessToken, requestId: id, updateInfo: { status: value } }
    dispatch(modifyRequestAccess(updateDto))
  }

  const handleDeleteRequest = value => {
    const deleteDto = { token: auth.accessToken, requestId: id }
    dispatch(removeRequestAccess(deleteDto))
  }

  return (
    <>
      <IconButton size='small' onClick={event => setAnchorEl(event.currentTarget)}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={() => setAnchorEl(null)}
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
        <MenuItem
          onClick={() => {
            handleChangeRequestStatus('accepted')
            setAnchorEl(false)
          }}
        >
          <Check fontSize='small' sx={{ mr: 2 }} />
          Accept
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleChangeRequestStatus('declined')
            setAnchorEl(false)
          }}
        >
          <Close fontSize='small' sx={{ mr: 2 }} />
          Decline
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleDeleteRequest('deleted')
            setAnchorEl(false)
          }}
        >
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

export default RowOptions
