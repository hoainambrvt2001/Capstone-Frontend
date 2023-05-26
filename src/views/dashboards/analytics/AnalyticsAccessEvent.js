// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { customizeRenderDateTime } from 'src/functions'

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
  if (row.photo_url) {
    return (
      <AvatarWithImageLink href={`/apps/user/view/${row.id}`}>
        <CustomAvatar src={row.photo_url} sx={{ mr: 3, width: 34, height: 34 }} />
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
          {getInitials(row.name ? row.name : 'Nam Vo')}
        </CustomAvatar>
      </AvatarWithoutImageLink>
    )
  }
}

const AnalyticsAccessEvent = ({ accessRoomReport }) => {
  // ** State
  const [pageSize, setPageSize] = useState(10)

  const columns = [
    {
      flex: 0.2,
      minWidth: 230,
      field: 'user',
      headerName: 'Accessed User',
      renderCell: ({ row }) => {
        const { user } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderClient(user)}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
              <Link href={`/apps/user/view/${user.id}`} passHref>
                <Typography
                  noWrap
                  component='a'
                  variant='subtitle2'
                  sx={{ color: 'text.primary', textDecoration: 'none' }}
                >
                  {user.name}
                </Typography>
              </Link>
              <Link href={`/apps/user/view/${user.id}`} passHref>
                <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
                  {user.email}
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
      headerName: 'Phone number',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {row.user.phone_number}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 120,
      field: 'is_guest',
      headerName: 'Credential',
      renderCell: ({ row }) => {
        return (
          <Typography
            noWrap
            variant='body2'
            fontWeight={600}
            sx={{ color: row.is_guest === true ? 'primary.main' : 'success.main' }}
          >
            {row.is_guest ? 'Guest' : 'Registered'}
          </Typography>
        )
      }
    },
    {
      flex: 0.2,
      minWidth: 200,
      field: 'accessed_time',
      headerName: 'Time',
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant='body2'>
            {customizeRenderDateTime(row.accessed_time)}
          </Typography>
        )
      }
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
              <Typography variant='h6'>Room access activities</Typography>
            </Box>
            <DataGrid
              autoHeight
              rows={accessRoomReport}
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
    </Box>
  )
}

export default AnalyticsAccessEvent
