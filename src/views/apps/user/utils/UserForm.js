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
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// ** Custom Components
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

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

const UserForm = ({ userData, isAdded }) => {
  // ** Yup Schema
  const USER_SCHEMA = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().required('It is a required field'),
    role: Yup.string().required('It is a required field'),
    name: Yup.string().required('It is a required field'),
    phone_number: Yup.string(),
    photo_url: Yup.string()
  })

  // ** Vars
  const renderUserAvatar = (photoUrl, userName) => {
    if (photoUrl) {
      return (
        <CustomAvatar
          alt='User Image'
          src={photoUrl}
          variant='rounded'
          sx={{ width: 120, height: 120, mb: 4, mr: 5 }}
        />
      )
    } else {
      return (
        <CustomAvatar
          skin='light'
          variant='rounded'
          color={'primary'}
          sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, mr: 5, fontSize: '3rem' }}
        >
          {getInitials(userName)}
        </CustomAvatar>
      )
    }
  }

  const onChangePhoto = (file, setFieldValue) => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setFieldValue('photo_url', reader.result)
      reader.readAsDataURL(files[0])
      setFieldValue('avatar_image', files[0])
    }
  }

  return (
    <CardContent>
      <Formik
        validationSchema={USER_SCHEMA}
        initialValues={{
          username: userData.email ? `@${userData.email.split('@')[0]}` : '',
          email: userData.email,
          role: userData.role_id,
          name: userData.name,
          phone_number: userData.phone_number,
          photo_url: userData.photo_url,
          avatar_image: null
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (isAdded) {
            if (values.avatar_image) {
              const bodyData = new FormData()
              bodyData.append('email', values.email)
              bodyData.append('role', values.role)
              bodyData.append('name', values.name)
              bodyData.append('phone_number', values.phone_number)
              bodyData.append('avatar_image', values.avatar_image)
            }
          } else {
          }

          console.log(values)
          setSubmitting(false)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ my: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {renderUserAvatar(values.photo_url, userData.name)}
                  <Box>
                    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                      Upload New Photo
                      <input
                        hidden
                        type='file'
                        onChange={file => onChangePhoto(file, setFieldValue)}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                      />
                    </ButtonStyled>
                    <ResetButtonStyled
                      color='error'
                      variant='outlined'
                      onClick={() => {
                        setFieldValue('photo_url', userData.photo_url)
                        setFieldValue('avatar_image', null)
                      }}
                    >
                      Reset
                    </ResetButtonStyled>
                    <Typography sx={{ mt: 4 }} component='p' variant='caption'>
                      Allowed PNG or JPEG. Max size of 800K.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {!isAdded ? (
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name='username'
                    label='Username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
              ) : null}
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
                  InputProps={{
                    readOnly: !isAdded
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Role</InputLabel>
                  <Select label='Role' name='role' value={values.role} onChange={handleChange} onBlur={handleBlur}>
                    <MenuItem value='638c5f1c700c4c50a7ffc01d'>Admin</MenuItem>
                    <MenuItem value='638c5f6a700c4c50a7ffc027'>Manager</MenuItem>
                    <MenuItem value='638c5f71700c4c50a7ffc028'>Subscriber</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                  fullWidth
                  name='phone_number'
                  label='Phone number'
                  placeholder='Enter phone number'
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone_number && Boolean(errors.phone_number)}
                  helperText={touched.phone_number && errors.phone_number}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' sx={{ mr: 4 }} onSubmit={handleSubmit}>
                  {isAdded ? 'Add User' : 'Update User'}
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

export default UserForm
