// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData as fetchEventData } from 'src/store/apps/abnormal-event'
import { fetchData as fetchRoomData } from 'src/store/apps/room'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/abnormal-event/list/TableHeaders'
import TableBody from 'src/views/apps/abnormal-event/list/TableBody'
import FilterHeader from 'src/views/apps/abnormal-event/list/FilterHeader'

const PageList = () => {
  // ** State
  const [building, setBuilding] = useState('')
  const [room, setRoom] = useState('')
  const [type, setType] = useState('')
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)

  // ** Hooks
  const dispatch = useDispatch()
  const eventSlice = useSelector(state => state.abnormal_event)
  const roomSlice = useSelector(state => state.room)

  useEffect(() => {
    dispatch(
      fetchEventData({
        building,
        room,
        type,
        q: value
      })
    )

    dispatch(
      fetchRoomData({
        building
      })
    )
  }, [dispatch, building, room, type, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleBuildingChange = useCallback(e => {
    setBuilding(e.target.value)
  }, [])

  const handleTypeChange = useCallback(e => {
    setType(e.target.value)
  }, [])

  const handleRoomChange = useCallback(e => {
    setRoom(e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FilterHeader
          handleBuildingChange={handleBuildingChange}
          handleTypeChange={handleTypeChange}
          handleRoomChange={handleRoomChange}
          building={building}
          type={type}
          room={room}
          allBuildings={roomSlice.allBuildings}
          allRooms={roomSlice.data}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} />
          <TableBody rowsData={eventSlice.data} pageSize={pageSize} setPageSize={setPageSize} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default PageList
