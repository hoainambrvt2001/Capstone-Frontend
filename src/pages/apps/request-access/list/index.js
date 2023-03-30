// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchRequestAccess } from 'src/store/apps/request-access'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/request-access/list/TableHeader'
import TableBody from 'src/views/apps/request-access/list/TableBody'
import FilterHeader from 'src/views/apps/request-access/list/FilterHeader'

// ** Config
import { useAuth } from 'src/hooks/useAuth'

const RequestAccessListPage = () => {
  const auth = useAuth()

  // ** State
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)
  const [value, setValue] = useState('')

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.request_access)

  useEffect(() => {
    const params = {
      page: pageNumber,
      limit: pageSize,
      status: status,
      q: value
    }
    dispatch(fetchRequestAccess({ token: auth.accessToken, params }))
  }, [dispatch, pageNumber, pageSize, status, value])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FilterHeader handleStatusChange={handleStatusChange} status={status} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} />
          <TableBody
            rowsData={store.data}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default RequestAccessListPage
