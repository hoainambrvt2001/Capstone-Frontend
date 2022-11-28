// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  abnormal_events: [
    {
      id: 1,
      type: 'stranger',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '402',
      building: 'B4',
      occurTime: 1665533700000,
      solveTime: 1665534600000,
      note: ''
    },
    {
      id: 2,
      type: 'stranger',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '402',
      building: 'B4',
      occurTime: 1665476100000,
      solveTime: 1665476700000,
      note: ''
    },
    {
      id: 3,
      type: 'stranger',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '304',
      building: 'A4',
      occurTime: 1665292500000,
      solveTime: 1665293400000,
      note: ''
    },
    {
      id: 4,
      type: 'overload',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '201',
      building: 'A4',
      occurTime: 1665213000000,
      solveTime: 1665213600000,
      note: ''
    },
    {
      id: 5,
      type: 'overload',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '302',
      building: 'B6',
      occurTime: 1665228600000,
      solveTime: 1665229200000,
      note: ''
    },
    {
      id: 6,
      type: 'overload',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '501',
      building: 'B6',
      occurTime: 1665110400000,
      solveTime: 1665111000000,
      note: ''
    },
    {
      id: 7,
      type: 'overload',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '304',
      building: 'B1',
      occurTime: 1665110700000,
      solveTime: 1665111300000,
      note: ''
    },
    {
      id: 8,
      type: 'fire',
      images: [
        { id: 101, url: '/images/stickers/access-event.png', name: 'access-event-1' },
        { id: 102, url: '/images/stickers/access-event.png', name: 'access-event-2' }
      ],
      room: '301',
      building: 'B1',
      occurTime: 1665049800000,
      solveTime: 1665053400000,
      note: ''
    }
  ]
}

// GET: list of abnormal-event data
mock.onGet('/apps/abnormal-event/list').reply(config => {
  const { q = '', building = null, room = null, type = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.abnormal_events.filter(
    event =>
      (event.type.toLowerCase().includes(queryLowered) ||
        event.room.toLowerCase().includes(queryLowered) ||
        event.building.toLowerCase().includes(queryLowered) ||
        (event.occurTime.toLowerCase().includes(queryLowered) &&
          event.occurDate.toLowerCase().includes(queryLowered) &&
          event.solveTime.toLowerCase().includes(queryLowered) &&
          event.solveDate.toLowerCase().includes(queryLowered))) &&
      event.building === (building || event.building) &&
      event.room === (room || event.room) &&
      event.type === (type || event.type)
  )

  return [
    200,
    {
      allData: data.abnormal_events,
      abnormalEvents: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// GET: particular abnormal-event data
mock.onGet('/apps/abnormal-event').reply(config => {
  const { id = '' } = config.params

  const eventData = data.abnormal_events.filter(event => event.id === parseInt(id, 10))

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
