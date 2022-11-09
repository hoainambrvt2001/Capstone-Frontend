// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  access_events: [
    {
      id: 1,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:11 AM',
      date: '12/10/2022',
      building: 'B4',
      room: '201'
    },
    {
      id: 2,
      userId: 2,
      fullName: 'Halsey Redmore',
      username: 'hredmore1',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '08:22 AM',
      date: '10/10/2022',
      building: 'B4',
      room: '202'
    },
    {
      id: 3,
      userId: 3,
      fullName: 'Marjory Sicely',
      username: 'msicely2',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '12:15 PM',
      date: '09/10/2022',
      building: 'B4',
      room: '203'
    },
    {
      id: 4,
      userId: 4,
      fullName: 'Cyrill Risby',
      username: 'crisby3',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '03:11 PM',
      date: '08/10/2022',
      building: 'B4',
      room: '204'
    },
    {
      id: 5,
      userId: 5,
      fullName: 'Maggy Hurran',
      username: 'mhurran4',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:30 PM',
      date: '08/10/2022',
      building: 'B4',
      room: '205'
    },
    {
      id: 6,
      userId: 6,
      fullName: 'Silvain Halstead',
      username: 'shalstead5',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      avatar: '/images/avatars/7.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'None',
      result: 'Ungranted',
      time: '09:50 AM',
      date: '07/10/2022',
      building: 'B4',
      room: '206'
    },
    {
      id: 7,
      userId: 7,
      fullName: 'Breena Gallemore',
      username: 'bgallemore6',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      avatar: '/images/avatars/8.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '09:45 AM',
      date: '07/10/2022',
      building: 'B4',
      room: '301'
    },
    {
      id: 8,
      userId: 8,
      fullName: 'Kathryne Liger',
      username: 'kliger7',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      avatar: '/images/avatars/4.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'None',
      result: 'Ungranted',
      time: '09:30 AM',
      date: '07/10/2022',
      building: 'B4',
      room: '302'
    },
    {
      id: 9,
      userId: 9,
      fullName: 'Franz Scotfurth',
      username: 'fscotfurth8',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      avatar: '/images/avatars/2.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:10 AM',
      date: '07/10/2022',
      building: 'B4',
      room: '303'
    },
    {
      id: 10,
      userId: 10,
      fullName: 'Jillene Bellany',
      username: 'jbellany9',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:00 PM',
      date: '06/10/2022',
      building: 'B4',
      room: '304'
    },
    {
      id: 11,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:11 AM',
      date: '12/10/2022',
      building: 'B4',
      room: '502'
    },
    {
      id: 12,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '09:11 AM',
      date: '11/10/2022',
      building: 'B4',
      room: '402'
    },
    {
      id: 13,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '08:22 AM',
      date: '10/10/2022',
      building: 'B4',
      room: '602'
    },
    {
      id: 14,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '12:15 PM',
      date: '09/10/2022',
      building: 'A4',
      room: '303'
    },
    {
      id: 15,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '03:10 PM',
      date: '08/10/2022',
      building: 'B6',
      room: '302'
    },
    {
      id: 16,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'None',
      result: 'Ungranted',
      time: '06:30 PM',
      date: '07/10/2022',
      building: 'A5',
      room: '101'
    },
    {
      id: 17,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '08:12 PM',
      date: '06/10/2022',
      building: 'C6',
      room: '504'
    },
    {
      id: 18,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'QR Code',
      result: 'Granted',
      time: '09:45 PM',
      date: '05/10/2022',
      building: 'B1',
      room: '202'
    },
    {
      id: 19,
      userId: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.jpg',
      credential: 'None',
      result: 'Ungranted',
      time: '10:45 PM',
      date: '04/10/2022',
      building: 'A4',
      room: '401'
    }
  ]
}

// GET: list of access-event data
mock.onGet('/apps/access-event/list').reply(config => {
  // const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''

  const filteredData = data.access_events

  return [
    200,
    {
      data: filteredData,
      total: filteredData.length
    }
  ]
})

// GET: particular access-event data
mock.onGet('/apps/access-event').reply(config => {
  const { id = '' } = config.params

  const eventData = data.access_events.filter(event => event.id === parseInt(id, 10))

  if (eventData.length) {
    return [
      200,
      {
        data: eventData[0]
      }
    ]
  } else {
    return [
      404,
      {
        message: 'Unable to find the requested user!'
      }
    ]
  }
})

// GET: all access-event data belongs to user
mock.onGet('/apps/access-event/user').reply(config => {
  const { userId = '' } = config.params

  let eventData = data.access_events.filter(event => event.userId === parseInt(userId, 10))

  if (eventData.length) {
    return [
      200,
      {
        data: eventData
      }
    ]
  } else {
    return [
      404,
      {
        message: 'Unable to find the requested user!'
      }
    ]
  }
})
