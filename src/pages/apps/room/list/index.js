// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData } from 'src/store/apps/room'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/room/list/TableHeader'
import TableBody from 'src/views/apps/room/list/TableBody'
import FilterHeader from 'src/views/apps/room/list/FilterHeader'

const RoomListPage = () => {
  // ** State
  const [building, setBuilding] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [pageSize, setPageSize] = useState(10)

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.room)

  useEffect(() => {
    dispatch(
      fetchData({
        building,
        type,
        status,
        q: value
      })
    )
  }, [dispatch, building, type, status, value])

  const handleBuildingChange = useCallback(e => {
    setBuilding(e.target.value)
  }, [])

  const handleFilter = useCallback(val => {
    setValue(val)
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
          handleBuildingChange={handleBuildingChange}
          handleTypeChange={handleTypeChange}
          handleStatusChange={handleStatusChange}
          building={building}
          type={type}
          status={status}
          allBuildings={store.allBuildings}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} />
          <TableBody rowsData={store.data} pageSize={pageSize} setPageSize={setPageSize} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default RoomListPage
