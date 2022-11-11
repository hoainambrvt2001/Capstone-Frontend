// ** NextJS Imports
import { useRouter } from 'next/router'

// ** Formik Imports
import { Formik } from 'formik'

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

const RoomForm = ({ id, roomData }) => {
  // ** Next Router
  const router = useRouter()

  console.log(roomData)

  return (
    <CardContent>
      <Formik
        initialValues={{
          code: roomData.code,
          status: roomData.status,
          name: roomData.name,
          building: roomData.building,
          type: roomData.type,
          capacity: roomData.capacity,
          desc: roomData.desc
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ my: 5 }}>
                <Typography fullWidth variant='h4' sx={{ mb: 3 }}>
                  Detail room information
                </Typography>
                <Typography fullWidth variant='body2'>
                  You have set up the necessary hardware devices in this room
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  required
                  fullWidth
                  name='code'
                  label='Room code'
                  placeholder='Enter room code'
                  value={values.code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.code && Boolean(errors.code)}
                  helperText={touched.code && errors.code}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Operation status</InputLabel>
                  <Select
                    disabled
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
                  disabled
                  required
                  fullWidth
                  name='name'
                  label='Room name'
                  placeholder='Enter room name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  required
                  fullWidth
                  name='building'
                  label='Building name'
                  placeholder='Enter building name'
                  value={values.building}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.building && Boolean(errors.building)}
                  helperText={touched.building && errors.building}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  required
                  type='number'
                  fullWidth
                  name='capacity'
                  label='Room capacity'
                  placeholder='Enter room capacity'
                  value={values.capacity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.capacity && Boolean(errors.capacity)}
                  helperText={touched.capacity && errors.capacity}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Type</InputLabel>
                  <Select
                    disabled
                    label='Type'
                    name='type'
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value='public'>Public</MenuItem>
                    <MenuItem value='private'>Private</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled
                  required
                  fullWidth
                  multiline
                  maxRows={10}
                  name='desc'
                  label='Description'
                  placeholder='Enter description'
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.desc && Boolean(errors.desc)}
                  helperText={touched.desc && errors.desc}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  sx={{ mr: 4 }}
                  onClick={() => {
                    router.push(`/apps/room/edit/${id}`)
                  }}
                >
                  Edit Room
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </CardContent>
  )
}

export default RoomForm
