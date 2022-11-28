// ** MUI Imports
import TextField from '@mui/material/TextField'
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import FormControl from '@mui/material/FormControl'

const langObj = { fr, ar, en }

const CustomizeDateTimePickers = ({ isEdited, fieldLabel, fieldName, fieldValue, setFieldValue }) => {
  // ** Hooks
  const { i18n } = useTranslation()

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={langObj[i18n.language]}>
        <MobileDateTimePicker
          readOnly={!isEdited}
          label={fieldLabel}
          value={fieldValue}
          onChange={newValue => {
            setFieldValue(fieldName, new Date(newValue).getTime())
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </FormControl>
  )
}

export default CustomizeDateTimePickers
