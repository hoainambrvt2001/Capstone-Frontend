// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchUsers } from 'src/store/apps/user'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/user/list/TableHeader'
import FilterHeader from 'src/views/apps/user/list/FilterHeader'
import TableBody from 'src/views/apps/user/list/TableBody'

// ** Auth Import
import { useAuth } from 'src/hooks/useAuth'

const UserListPage = () => {
  const auth = useAuth()

  // ** State
  const [role, setRole] = useState('')
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  // ** Hooks
  const dispatch = useDispatch()
  const userSlice = useSelector(state => state.user)

  useEffect(() => {
    const params = {
      role,
      q: value
    }
    dispatch(
      fetchUsers({
        token: auth.accessToken,
        params
      })
    )
  }, [dispatch, role, value, auth.accessToken])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FilterHeader role={role} handleRoleChange={handleRoleChange} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} />
          <TableBody
            rowsData={userSlice.data}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserListPage
