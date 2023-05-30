// ** Next Imports
import Link from 'next/link'

// ** Formik Imports
import { Formik } from 'formik'
import * as Yup from 'yup'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { ROOM_TYPE } from 'src/utils/constants'

const renderFormTitile = (isAdded, isEdited) => {
  if (isAdded) {
    return 'Add New Room'
  } else if (isEdited) {
    return 'Edit Room'
  }
  return 'View Room Detail'
}

const renderFormDescription = (isAdded, isEdited) => {
  if (isAdded || isEdited) {
    return 'Make sure that you have set up the necessary hardware devices in this room'
  }
  return 'You have set up the necessary hardware devices in this room'
}

const RoomForm = ({ id, isAdded, isEdited, roomData }) => {
  // ** Yup Schema
  const ROOM_SCHEMA = Yup.object().shape({
    name: Yup.string().required('It is a required field'),
    type: Yup.string().required('It is a required field'),
    max_occupancy: Yup.number().required('It is a required field'),
    status: Yup.string().required('It is a required field'),
    description: Yup.string()
  })

  // ** Initial Values:
  const initRoomData = {
    name: roomData.name,
    type: roomData.room_type_id,
    max_occupancy: roomData.max_occupancy,
    status: roomData.status,
    description: roomData.description
  }

  return (
    <CardContent>
      <Formik
        validationSchema={ROOM_SCHEMA}
        initialValues={initRoomData}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ my: 5 }}>
                <Typography fullWidth variant='h4' sx={{ mb: 3 }}>
                  {renderFormTitile(isAdded, isEdited)}
                </Typography>
                <Typography fullWidth variant='body2'>
                  {renderFormDescription(isAdded, isEdited)}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Operation status</InputLabel>
                  <Select
                    InputProps={{
                      readOnly: !isEdited
                    }}
                    label='Operation status'
                    name='status'
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value='available'>Available</MenuItem>
                    <MenuItem value='maintenance'>Maintenance</MenuItem>
                    <MenuItem value='unavailale'>Unavailable</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    readOnly: !isEdited
                  }}
                  required
                  fullWidth
                  name='name'
                  label='Name'
                  placeholder='Enter name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    readOnly: !isEdited
                  }}
                  required
                  type='number'
                  fullWidth
                  name='max_occupancy'
                  label='Maximum occupancy'
                  placeholder='Enter maximum occupancy'
                  value={values.max_occupancy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.max_occupancy && Boolean(errors.max_occupancy)}
                  helperText={touched.max_occupancy && errors.max_occupancy}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Type</InputLabel>
                  <Select
                    InputProps={{
                      readOnly: !isEdited
                    }}
                    label='Type'
                    name='type'
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={ROOM_TYPE.PUBLIC}>Public</MenuItem>
                    <MenuItem value={ROOM_TYPE.PRIVATE}>Private</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    readOnly: !isEdited
                  }}
                  required
                  fullWidth
                  multiline
                  maxRows={10}
                  name='desc'
                  label='Description'
                  placeholder='Enter description'
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                {isEdited ? (
                  <>
                    <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                      Save
                    </Button>
                    <Link passHref href={`/apps/room/edit/${id}`}>
                      <Button type='reset' variant='outlined' color='secondary' onClick={resetForm}>
                        Reset
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Button variant='contained' sx={{ mr: 4 }}>
                    Edit This Room
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </CardContent>
  )
}

export default RoomForm
