// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import { styled } from '@mui/material/styles'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Styled component for the link for the avatar with image
const AvatarWithImageLink = styled(Link)(({ theme }) => ({
  marginRight: theme.spacing(3)
}))

// ** Styled component for the link for the avatar without image
const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

// ** Customize Renders Client Column
const RenderClientColumn = user => {
  if (user.photo_url) {
    return (
      <AvatarWithImageLink href={`/apps/user/view/${user.id}`}>
        <CustomAvatar src={user.photo_url} sx={{ mr: 3, width: 34, height: 34 }} />
      </AvatarWithImageLink>
    )
  } else {
    return (
      <AvatarWithoutImageLink href={`/apps/user/view/${user.id}`}>
        <CustomAvatar skin='light' color={'primary'} sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}>
          {getInitials(user.name ? user.name : user.email.split('@')[0])}
        </CustomAvatar>
      </AvatarWithoutImageLink>
    )
  }
}

export default RenderClientColumn
