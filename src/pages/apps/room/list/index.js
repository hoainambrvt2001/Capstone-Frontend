// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchRooms } from 'src/store/apps/room'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/room/list/TableHeader'
import TableBody from 'src/views/apps/room/list/TableBody'
import FilterHeader from 'src/views/apps/room/list/FilterHeader'

// ** Auth Import
import { useAuth } from 'src/hooks/useAuth'

const RoomListPage = () => {
  const auth = useAuth()

  // ** State
  const [type, setType] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  // ** Hooks
  const dispatch = useDispatch()
  const roomSlice = useSelector(state => state.room)

  useEffect(() => {
    const params = {
      q: searchValue,
      type: type,
      status: status
    }
    dispatch(
      fetchRooms({
        token: auth.accessToken,
        params
      })
    )
  }, [dispatch, type, status, searchValue, auth.accessToken])

  const handleFilter = useCallback(val => {
    setSearchValue(val)
  }, [])

  const handleTypeChange = useCallback(e => {
    setType(e.target.value)
  }, [])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FilterHeader
          handleTypeChange={handleTypeChange}
          handleStatusChange={handleStatusChange}
          type={type}
          status={status}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={searchValue} handleFilter={handleFilter} />
          <TableBody
            rowsData={roomSlice.data}
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

export default RoomListPage
