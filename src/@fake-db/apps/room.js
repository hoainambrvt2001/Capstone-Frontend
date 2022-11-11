// ** Mock
import mock from 'src/@fake-db/mock'

const data = {
  rooms: [
    {
      id: 1,
      code: 'R0001',
      name: '301',
      building: 'B4',
      capacity: '150',
      type: 'public',
      status: 'available',
      desc: 'Study room'
    },
    {
      id: 2,
      code: 'R0002',
      name: '402',
      building: 'B4',
      capacity: '150',
      type: 'public',
      status: 'maintenance',
      desc: 'Study room'
    },
    {
      id: 3,
      code: 'R0003',
      name: '503',
      building: 'B4',
      capacity: '140',
      type: 'private',
      status: 'available',
      desc: 'Meeting room'
    },
    {
      id: 4,
      code: 'R0004',
      name: '604',
      building: 'B4',
      capacity: '120',
      type: 'private',
      status: 'available',
      desc: 'Union room'
    },
    {
      id: 5,
      code: 'R0005',
      name: '203',
      building: 'A4',
      capacity: '60',
      type: 'public',
      status: 'available',
      desc: 'Study Room'
    },
    {
      id: 6,
      code: 'R0006',
      name: '301',
      building: 'A4',
      capacity: '55',
      type: 'public',
      status: 'available',
      desc: 'Coffee room'
    },
    {
      id: 7,
      code: 'R0007',
      name: '302',
      building: 'A4',
      capacity: '30',
      type: 'public',
      status: 'available',
      desc: 'Canteen room'
    },
    {
      id: 8,
      code: 'R0008',
      name: '101',
      building: 'A5',
      capacity: '120',
      type: 'private',
      status: 'available',
      desc: 'Lab room'
    },
    {
      id: 9,
      code: 'R0009',
      name: '103',
      building: 'A3',
      capacity: '100',
      type: 'private',
      status: 'maintenance',
      desc: 'Meeting room'
    },
    {
      id: 10,
      code: 'R0010',
      name: '402',
      building: 'A5',
      capacity: '300',
      type: 'public',
      status: 'available',
      desc: 'Big meeting room'
    }
  ]
}

// POST: Add new room
mock.onPost('/apps/rooms/add-room').reply(config => {
  // Get event from post data
  const room = JSON.parse(config.data).data
  const { length } = data.rooms
  let lastIndex = 0
  if (length) {
    lastIndex = data.rooms[length - 1].id
  }
  room.id = lastIndex + 1
  data.rooms.unshift(room)

  return [201, { room }]
})

// GET: Updated DATA
mock.onGet('/apps/rooms/list').reply(config => {
  const { q = '', building = null, type = null, status = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.rooms.filter(
    room =>
      (room.code.toLowerCase().includes(queryLowered) ||
        room.name.toLowerCase().includes(queryLowered) ||
        room.building.toLowerCase().includes(queryLowered) ||
        (room.capacity.toLowerCase().includes(queryLowered) &&
          room.type.toLowerCase().includes(queryLowered) &&
          room.status.toLowerCase().includes(queryLowered))) &&
      room.building === (building || room.building) &&
      room.type === (type || room.type) &&
      room.status === (status || room.status)
  )

  return [
    200,
    {
      allData: data.rooms,
      rooms: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// GET: particular room data
mock.onGet('/apps/room').reply(config => {
  const { id } = config.params
  const roomData = data.rooms.filter(room => room.id === parseInt(id, 10))
  if (roomData.length) {
    return [200, roomData[0]]
  } else {
    return [404, { message: 'Unable to find the requested room!' }]
  }
})

// DELETE: Deletes room
mock.onDelete('/apps/rooms/delete').reply(config => {
  // Get room id from URL
  const roomId = config.data
  const roomIndex = data.rooms.findIndex(room => room.id === roomId)
  data.rooms.splice(roomIndex, 1)

  return [200]
})
