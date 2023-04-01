// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/store/apps/chat'
import user from 'src/store/apps/user'
import email from 'src/store/apps/email'
import invoice from 'src/store/apps/invoice'
import permissions from 'src/store/apps/permissions'
import access_event from 'src/store/apps/access-event'
import room from 'src/store/apps/room'
import abnormal_event from 'src/store/apps/abnormal-event'
import request_access from 'src/store/apps/request-access'
import image_dialog from 'src/store/apps/image-dialog'
import alert_with_image from 'src/store/apps/alert-with-image'
import alert_without_image from 'src/store/apps/alert-without-image'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    invoice,
    permissions,
    access_event,
    room,
    abnormal_event,
    request_access,
    image_dialog,
    alert_with_image,
    alert_without_image
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
