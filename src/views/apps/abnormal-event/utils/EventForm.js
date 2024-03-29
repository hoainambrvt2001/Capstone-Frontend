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
import FileUploaderMultiple from './FileUploaderMultiple'

// ** Styled Component
import CardSnippet from 'src/@core/components/card-snippet'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Source code Imports
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'
import CustomizeDateTimePickers from './DateTimePickers'

// ** Constant Imports
import { ABNORMAL_EVENT_TYPE } from 'src/utils/constants'

const renderFormTitile = isEdited => {
  if (isEdited) {
    return 'Edit Event'
  }
  return 'View Event Detail'
}

const EventForm = ({ id, isEdited, eventData, listRooms }) => {
  // ** Yup Schema
  const EVENT_SCHEMA = Yup.object().shape({
    abnormal_type_id: Yup.string().required('It is a required field'),
    room_id: Yup.string().required('It is a required field'),
    occurred_time: Yup.number().required('It is a required field'),
    note: Yup.string(),
    images: Yup.array().required('It is a required field')
  })

  // ** Initial Values:
  const initEventData = {
    abnormal_type_id: eventData.abnormal_type_id,
    room_id: eventData.room_id,
    occurred_time: eventData.occurred_time,
    note: eventData.note,
    images: eventData.images
  }

  return (
    <CardContent>
      <Formik
        validationSchema={EVENT_SCHEMA}
        initialValues={initEventData}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ my: 5 }}>
                <Typography fullWidth variant='h4' sx={{ mb: 3 }}>
                  {renderFormTitile(isEdited)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel required>Type</InputLabel>
                  <Select
                    inputProps={{
                      readOnly: !isEdited
                    }}
                    label='Type'
                    name='abnormal_type_id'
                    value={values.abnormal_type_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={ABNORMAL_EVENT_TYPE.STRANGER}>Stranger</MenuItem>
                    <MenuItem value={ABNORMAL_EVENT_TYPE.OVERCROWD}>Overcrowd</MenuItem>
                    <MenuItem value={ABNORMAL_EVENT_TYPE.FIRE}>Fire</MenuItem>
                    <MenuItem value={ABNORMAL_EVENT_TYPE.OTHER}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel required>Room</InputLabel>
                  <Select
                    inputProps={{
                      readOnly: !isEdited
                    }}
                    label='Room'
                    name='room_id'
                    value={values.room_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {listRooms.map(room => (
                      <MenuItem value={room.id} key={room.id}>
                        {room.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomizeDateTimePickers
                  isEdited={isEdited}
                  fieldLabel={'Occurred Time'}
                  fieldName={'occurred_time'}
                  fieldValue={values.occurred_time}
                  setFieldValue={setFieldValue}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    readOnly: !isEdited
                  }}
                  multiline={true}
                  minRows={6}
                  fullWidth
                  name='note'
                  label='Note'
                  placeholder='Enter note'
                  value={values.note}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>

              <Grid item xs={12}>
                <DropzoneWrapper>
                  <CardSnippet
                    title='Upload Multiple Files'
                    code={{
                      tsx: null,
                      jsx: source.FileUploaderMultipleJSXCode
                    }}
                  >
                    <FileUploaderMultiple isEdited={isEdited} images={values.images ? values.images : []} />
                  </CardSnippet>
                </DropzoneWrapper>
              </Grid>

              <Grid item xs={12}>
                {isEdited ? (
                  <>
                    <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                      Save changes
                    </Button>
                    <Link passHref href={`/apps/event/edit/${id}`}>
                      <Button type='reset' variant='outlined' color='secondary' onClick={resetForm}>
                        Reset
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Link passHref href={`/apps/abnormal-event/edit/${id}`}>
                    <Button variant='contained' sx={{ mr: 4 }}>
                      Edit This Event
                    </Button>
                  </Link>
                )}
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </CardContent>
  )
}

export default EventForm
