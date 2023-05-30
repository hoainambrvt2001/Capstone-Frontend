// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import PencilOutline from 'mdi-material-ui/PencilOutline'

// ** Store Imports
import { useDispatch } from 'react-redux'

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
          <Link href={`/apps/abnormal-event/view/${id}`} passHref>
            <MenuItemLink>
              <EyeOutline fontSize='small' sx={{ mr: 2 }} />
              View
            </MenuItemLink>
          </Link>
        </MenuItem>
        <MenuItem sx={{ p: 0 }}>
          <Link href={`/apps/abnormal-event/edit/${id}`} passHref>
            <MenuItemLink>
              <PencilOutline fontSize='small' sx={{ mr: 2 }} />
              Edit
            </MenuItemLink>
          </Link>
        </MenuItem>
      </Menu>
    </>
  )
}

export default RowOptions
