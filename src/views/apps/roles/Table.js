// ** React Imports
import { useEffect, useCallback, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Actions Imports
import { fetchData } from 'src/store/apps/user'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/roles/TableHeader'
import TableBody from './TableBody'
import EditRoleModal from './EditRoleModal'

const UserList = () => {
  // ** State
  const [role, setRole] = useState('')
  const [value, setValue] = useState('')
  const [pageSize, setPageSize] = useState(10)
  const [showEdit, setShowEdit] = useState(false)
  const [editData, setEditData] = useState({ id: '', role: 'admin' })

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)
  useEffect(() => {
    dispatch(
      fetchData({
        role,
        q: value
      })
    )
  }, [dispatch, role, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  const handleOpenEdit = (id, role) => {
    setShowEdit(true)
    setEditData({ id, role })
  }

  const handleCloseEdit = () => {
    setShowEdit(false)
    setEditData({ id: '', role: 'subscriber' })
  }

  const handleSave = role => {
    setShowEdit(false)
    setEditData({ id: '', role: 'subscriber' })
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} handleRoleChange={handleRoleChange} role={role} />
          <TableBody
            rowsData={store.data}
            pageSize={pageSize}
            setPageSize={setPageSize}
            handleOpenEdit={handleOpenEdit}
          />
          <EditRoleModal
            showEdit={showEdit}
            handleCloseEdit={handleCloseEdit}
            handleSave={handleSave}
            defaultRole={editData.role}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserList
