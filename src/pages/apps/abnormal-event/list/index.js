// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchAbnormalEvents } from 'src/store/apps/abnormal-event'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/abnormal-event/list/TableHeaders'
import TableBody from 'src/views/apps/abnormal-event/list/TableBody'
import FilterHeader from 'src/views/apps/abnormal-event/list/FilterHeader'
import { useAuth } from 'src/hooks/useAuth'
import { getAllRooms } from 'src/api'

const PageList = () => {
  // ** Auth
  const auth = useAuth()

  // ** State
  const [allRooms, setAllRooms] = useState([])
  const [room, setRoom] = useState('')
  const [type, setType] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(0)

  // ** Hooks
  const dispatch = useDispatch()
  const eventSlice = useSelector(state => state.abnormal_event)

  useEffect(() => {
    const fetchAllRooms = async () => {
      const rooms = await getAllRooms(auth.accessToken)
      setAllRooms(rooms.data)
    }
    fetchAllRooms()
  }, [])

  useEffect(() => {
    const params = {
      page: pageNumber,
      limit: pageSize,
      room: room,
      type: type
    }
    dispatch(
      fetchAbnormalEvents({
        token: auth.accessToken,
        params
      })
    )
  }, [dispatch, pageNumber, pageSize, room, type])

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
          handleTypeChange={handleTypeChange}
          handleRoomChange={handleRoomChange}
          type={type}
          room={room}
          allRooms={allRooms}
        />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader />
          <TableBody
            rowsData={eventSlice.data}
            rowTotal={eventSlice.total}
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

export default PageList
