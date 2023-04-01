// ** Icon imports
import LockOutline from 'mdi-material-ui/LockOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import DoorOpen from 'mdi-material-ui/DoorOpen'
import CalendarAlert from 'mdi-material-ui/CalendarAlert'

const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'User',
      icon: AccountOutline,
      children: [
        {
          title: 'List',
          path: '/apps/user/list'
        },
        {
          title: 'Add',
          path: '/apps/user/add'
        }
      ]
    },
    {
      title: 'Room',
      icon: DoorOpen,
      children: [
        {
          title: 'List',
          path: '/apps/room/list'
        },
        {
          title: 'Add',
          path: '/apps/room/add'
        }
      ]
    },
    {
      title: 'Abnormal Event',
      icon: CalendarAlert,
      path: '/apps/abnormal-event/list'
    },
    {
      title: 'Request Accesses',
      icon: FileDocumentOutline,
      path: '/apps/request-access'
    },
    {
      title: 'Roles',
      icon: LockOutline,
      path: '/apps/roles'
    }
  ]
}

export default navigation
