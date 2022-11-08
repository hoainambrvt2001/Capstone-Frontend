// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import RechartsWrapper from 'src/@core/styles/libs/recharts'

// ** Demo Components Imports
import AnalyticsAbnormalEvents from 'src/views/dashboards/analytics/AnalyticsAbnormalEvent'
import AnalyticsAccessEvent from 'src/views/dashboards/analytics/AnalyticsAccessEvent'
import AnalyticsOverview from 'src/views/dashboards/analytics/AnalyticsOverview'
import AnalyticsTotalEventCard from 'src/views/dashboards/analytics/AnalyticsTotalEventCard'
import AnalyticsVisitsByDay from 'src/views/dashboards/analytics/AnalyticsVisitsByDay'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsTotalEventCard
            eventName={'Total Visitors'}
            eventNumber={1000}
            eventImg={'total-visitor'}
            imgWidth={250}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <AnalyticsTotalEventCard
            eventName={'Total Abnormal Events'}
            eventNumber={50}
            eventImg={'total-abnormal'}
            imgWidth={200}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <AnalyticsVisitsByDay />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Grid container>
            <Grid item xs={12}>
              <AnalyticsOverview />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RechartsWrapper>
            <AnalyticsAbnormalEvents />
          </RechartsWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <AnalyticsAccessEvent />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
