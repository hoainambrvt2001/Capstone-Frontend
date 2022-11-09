// ** React Imports
import { Fragment } from 'react'

// ** Demo Component Imports
import UsersRoomAccessTable from './UsersRoomAccessTable'

const UserViewOverview = ({ accessData, handleOpenModel }) => {
  return (
    <Fragment>
      <UsersRoomAccessTable accessData={accessData} handleOpenModel={handleOpenModel} />
    </Fragment>
  )
}

export default UserViewOverview
