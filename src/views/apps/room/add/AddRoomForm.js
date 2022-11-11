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

const AddRoomForm = () => {
  // ** Yup Schema
  const ROOM_SCHEMA = Yup.object().shape({
    code: Yup.string().required('It is a required field'),
    name: Yup.string().required('It is a required field'),
    building: Yup.string().required('It is a required field'),
    type: Yup.string().required('It is a required field'),
    capacity: Yup.number().required('It is a required field'),
    desc: Yup.string()
  })

  return (
    <CardContent>
      <Formik
        validationSchema={ROOM_SCHEMA}
        initialValues={{
          code: '',
          name: '',
          building: '',
          type: '',
          capacity: 1,
          desc: ''
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
                  Add room information
                </Typography>
                <Typography fullWidth variant='body2'>
                  Make sure that you have set up the necessary hardware devices in this room
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
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

              <Grid item xs={12} sm={4}>
                <TextField
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
              <Grid item xs={12} sm={4}>
                <TextField
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
                  <Select label='Type' name='type' value={values.type} onChange={handleChange} onBlur={handleBlur}>
                    <MenuItem value='public'>Public</MenuItem>
                    <MenuItem value='private'>Private</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                  Add Room
                </Button>
                <Button type='reset' variant='outlined' color='secondary' onClick={resetForm}>
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </CardContent>
  )
}

export default AddRoomForm
