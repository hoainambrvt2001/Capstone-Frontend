// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import user from 'src/store/apps/user'
import permissions from 'src/store/apps/permissions'
import access_event from 'src/store/apps/access-event'
import room from 'src/store/apps/room'
import abnormal_event from 'src/store/apps/abnormal-event'
import request_access from 'src/store/apps/request-access'
import dialog_image from 'src/store/apps/dialog-image'
import alert_with_image from 'src/store/apps/alert-with-image'
import alert_with_text from 'src/store/apps/alert-with-text'

export const store = configureStore({
  reducer: {
    user,
    permissions,
    access_event,
    room,
    abnormal_event,
    request_access,
    dialog_image,
    alert_with_image,
    alert_with_text
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
