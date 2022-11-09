// ** React Imports
import { useState } from 'react'

// ** Formik Imports
import { Formik } from 'formik'
import * as Yup from 'yup'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

// ** MUI Lab Imports
import DatePicker from '@mui/lab/DatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const AddUserForm = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [avatarSrc, setAvatarSrc] = useState('/images/avatars/1.png')

  // ** Yup Schema
  const USER_SCHEMA = Yup.object().shape({
    username: Yup.string().required('It is a required field'),
    role: Yup.string().required('It is a required field'),
    firstName: Yup.string().required('It is a required field'),
    lastName: Yup.string().required('It is a required field'),
    contact: Yup.string().required('It is a required field'),
    email: Yup.string().required('It is a required field'),
    birthdate: Yup.string().required('It is a required field'),
    company: Yup.string(),
    address: Yup.string().required('It is a required field'),
    country: Yup.string().required('It is a required field'),
    gender: Yup.string().required('It is a required field')
  })

  const onChange = file => {
    // TODO: UPDATE IMAGE TO FIREBASE
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setAvatarSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <Formik
        validationSchema={USER_SCHEMA}
        initialValues={{
          username: '',
          role: 'subscriber',
          firstName: '',
          lastName: '',
          contact: '',
          email: '',
          birthdate: Date.now(),
          company: '',
          address: '',
          country: '',
          gender: 'male'
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled src={avatarSrc} alt='Profile Pic' />
                  <Box>
                    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                      Upload New Photo
                      <input
                        hidden
                        type='file'
                        onChange={onChange}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                      />
                    </ButtonStyled>
                    <ResetButtonStyled
                      color='error'
                      variant='outlined'
                      onClick={() => setAvatarSrc('/images/avatars/1.png')}
                    >
                      Reset
                    </ResetButtonStyled>
                    <Typography sx={{ mt: 4 }} component='p' variant='caption'>
                      Allowed PNG or JPEG. Max size of 800K.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='username'
                  label='Username'
                  placeholder='Enter user name'
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Role</InputLabel>
                  <Select label='Role' name='role' value={values.role} onChange={handleChange} onBlur={handleBlur}>
                    <MenuItem value='admin'>Admin</MenuItem>
                    <MenuItem value='manager'>Manager</MenuItem>
                    <MenuItem value='subscriber'>Subscriber</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='firstName'
                  label='First name'
                  placeholder='Enter first name'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='lastName'
                  label='Last name'
                  placeholder='Enter last name'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='contact'
                  label='Mobile'
                  placeholder='Enter phone number'
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.contact && Boolean(errors.contact)}
                  helperText={touched.contact && errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type='email'
                  name='email'
                  label='Email'
                  placeholder='Enter email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      fullWidth
                      name='birthdate'
                      label='Birthdate'
                      value={values.birthdate}
                      onChange={value => setFieldValue('birthdate', Date.parse(value))}
                      onBlur={handleBlur}
                      renderInput={params => (
                        <TextField
                          {...params}
                          error={touched.birthdate && Boolean(errors.birthdate)}
                          helperText={touched.birthdate && errors.birthdate}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name='company'
                  label='Company'
                  placeholder='Enter company'
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='address'
                  label='Address'
                  placeholder='Enter address'
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name='country'
                  label='Country'
                  placeholder='Enter country'
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.country && Boolean(errors.country)}
                  helperText={touched.country && errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormLabel required>Gender</FormLabel>
                  <RadioGroup row name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur}>
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='other' control={<Radio />} label='Other' />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* {openAlert ? (
                <Grid item xs={12}>
                  <Alert
                    severity='warning'
                    sx={{ '& a': { fontWeight: 400 } }}
                    action={
                      <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                        <Close fontSize='inherit' />
                      </IconButton>
                    }
                  >
                    <AlertTitle sx={{ mb: '.15rem' }}>Your email is not confirmed. Please check your inbox.</AlertTitle>
                    <Link href='/' onClick={e => e.preventDefault()}>
                      Resend Confirmation
                    </Link>
                  </Alert>
                </Grid>
              ) : null} */}

              <Grid item xs={12}>
                <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                  Add User
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

export default AddUserForm
