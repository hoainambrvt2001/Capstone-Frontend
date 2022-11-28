// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import EventView from 'src/views/apps/abnormal-event/utils/EventView'

const ViewEvent = ({ id, eventData, listBuildings, listRooms }) => {
  return (
    <EventView id={id} isEdited={false} eventData={eventData} listBuildings={listBuildings} listRooms={listRooms} />
  )
}

export const getStaticPaths = async () => {
  const allEvents = await axios.get('/apps/abnormal-event/list').then(res => res.data.allData)

  const paths = allEvents.map(event => ({
    params: { id: `${event.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const eventData = await axios.get('/apps/abnormal-event', { params: { id } }).then(res => res.data.data)
  const listBuildings = await axios.get('/apps/rooms/list-building').then(res => res.data.all_buildings)
  const listRooms = await axios.get('/apps/rooms/list').then(res => res.data.rooms)
  return {
    props: {
      id,
      eventData,
      listBuildings,
      listRooms
    }
  }
}

export default ViewEvent
