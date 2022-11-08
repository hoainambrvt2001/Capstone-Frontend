// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  access_events: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:11 AM',
      date: '12/10/2022'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      username: 'hredmore1',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '08:22 AM',
      date: '10/10/2022'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      username: 'msicely2',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '12:15 PM',
      date: '09/10/2022'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      username: 'crisby3',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '03:11 PM',
      date: '08/10/2022'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      username: 'mhurran4',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:30 PM',
      date: '08/10/2022'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      username: 'shalstead5',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      avatar: '/images/avatars/7.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:50 AM',
      date: '07/10/2022'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      username: 'bgallemore6',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      avatar: '/images/avatars/8.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '09:45 AM',
      date: '07/10/2022'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      username: 'kliger7',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      avatar: '/images/avatars/4.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:30 AM',
      date: '07/10/2022'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      username: 'fscotfurth8',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      avatar: '/images/avatars/2.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:10 AM',
      date: '07/10/2022'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      username: 'jbellany9',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:00 PM',
      date: '06/10/2022'
    },
    {
      id: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:11 AM',
      date: '12/10/2022'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      username: 'hredmore1',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '08:22 AM',
      date: '10/10/2022'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      username: 'msicely2',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '12:15 PM',
      date: '09/10/2022'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      username: 'crisby3',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '03:11 PM',
      date: '08/10/2022'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      username: 'mhurran4',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:30 PM',
      date: '08/10/2022'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      username: 'shalstead5',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      avatar: '/images/avatars/7.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:50 AM',
      date: '07/10/2022'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      username: 'bgallemore6',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      avatar: '/images/avatars/8.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '09:45 AM',
      date: '07/10/2022'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      username: 'kliger7',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      avatar: '/images/avatars/4.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:30 AM',
      date: '07/10/2022'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      username: 'fscotfurth8',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      avatar: '/images/avatars/2.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:10 AM',
      date: '07/10/2022'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      username: 'jbellany9',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:00 PM',
      date: '06/10/2022'
    },
    {
      id: 1,
      fullName: 'Galen Slixby',
      username: 'gslixby0',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:11 AM',
      date: '12/10/2022'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      username: 'hredmore1',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '08:22 AM',
      date: '10/10/2022'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      username: 'msicely2',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '12:15 PM',
      date: '09/10/2022'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      username: 'crisby3',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      avatar: '/images/avatars/3.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '03:11 PM',
      date: '08/10/2022'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      username: 'mhurran4',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      avatar: '/images/avatars/1.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:30 PM',
      date: '08/10/2022'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      username: 'shalstead5',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      avatar: '/images/avatars/7.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:50 AM',
      date: '07/10/2022'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      username: 'bgallemore6',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      avatar: '/images/avatars/8.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'Admin Permission',
      result: 'Granted',
      time: '09:45 AM',
      date: '07/10/2022'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      username: 'kliger7',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      avatar: '/images/avatars/4.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'None',
      result: 'Ungranted',
      time: '09:30 AM',
      date: '07/10/2022'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      username: 'fscotfurth8',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      avatar: '/images/avatars/2.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '07:10 AM',
      date: '07/10/2022'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      username: 'jbellany9',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      avatar: '/images/avatars/5.png',
      accessImg: '/images/stickers/access-event.png',
      credential: 'QR Code',
      result: 'Granted',
      time: '06:00 PM',
      date: '06/10/2022'
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
  const { id } = config.params
  const eventData = data.access_events.filter(event => event.id === parseInt(id, 10))
  if (eventData.length) {
    return {
      statusCode: 200,
      data: eventData[0]
    }
  } else {
    return [
      404,
      {
        message: 'Unable to find the requested user!'
      }
    ]
  }
})
