// ** React Imports:
import React, { useEffect, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Axios Imports:
import { getAccessEventsByRoomId, getAllReports, getRoomReport } from 'src/api/dashboard'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import { useAuth } from 'src/hooks/useAuth'

// ** Demo Components Imports
import AnalyticsAbnormalEvents from 'src/views/dashboards/analytics/AnalyticsAbnormalEvent'
import AnalyticsAccessEvent from 'src/views/dashboards/analytics/AnalyticsAccessEvent'
import AnalyticsOverview from 'src/views/dashboards/analytics/AnalyticsOverview'
import AnalyticsTotalEventCard from 'src/views/dashboards/analytics/AnalyticsTotalEventCard'
import AnalyticsVisitsByDay from 'src/views/dashboards/analytics/AnalyticsVisitsByDay'

const AnalyticsDashboard = () => {
  const auth = useAuth()
  const [visitorsByDayReport, setVisitorsByDayReport] = useState(null)
  const [abnormalEventsReport, setAbnormalEventsReport] = useState([])
  const [roomReport, setRoomReport] = useState([])
  const [accessRoomReport, setAccessRoomReport] = useState([])

  useEffect(() => {
    const fetchAllReports = async () => {
      if (auth.accessToken) {
        const allReports = await getAllReports(auth.accessToken)
        setVisitorsByDayReport(allReports.data.vistors_by_days_report)
        setAbnormalEventsReport(allReports.data.abnormal_event_report)
      }
    }
    fetchAllReports()
  }, [auth.accessToken])

  useEffect(() => {
    const fetchRoomReport = async () => {
      if (auth.accessToken) {
        const roomReport = await getRoomReport(auth.accessToken)
        const accessRoom = await getAccessEventsByRoomId(auth.accessToken)
        setRoomReport(roomReport.data)
        setAccessRoomReport(accessRoom.data)
      }
    }
    fetchRoomReport()
  }, [auth.accessToken])

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} sm={6} md={6}>
        <AnalyticsTotalEventCard
          eventName={'Total visitors'}
          eventNumber={roomReport.total_visitors}
          eventImg={'total-visitor'}
          imgWidth={250}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <AnalyticsTotalEventCard
          eventName={'Total abnormal events'}
          eventNumber={roomReport.total_abnormal_events}
          eventImg={'total-abnormal'}
          imgWidth={200}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <ApexChartWrapper>
          <AnalyticsVisitsByDay visitorsByDayReport={visitorsByDayReport} />
        </ApexChartWrapper>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <Grid container>
          <Grid item xs={12}>
            <AnalyticsOverview roomReport={roomReport} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        {/* <RechartsWrapper>
          <AnalyticsAbnormalEvents abnormalEventsReport={abnormalEventsReport} />
        </RechartsWrapper> */}
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <AnalyticsAccessEvent accessRoomReport={accessRoomReport} />
      </Grid>
    </Grid>
  )
}

export default AnalyticsDashboard
