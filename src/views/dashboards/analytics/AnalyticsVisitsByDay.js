// ** React Imports:
import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { DAY_OF_WEEK } from 'src/utils/constants'

const AnalyticsVisitsByDay = ({ visitorsByDayReport }) => {
  // ** State:
  const [reportData, setReportData] = useState([0, 0, 0, 0, 0, 0, 0])
  const [totalVisits, setTotalVisits] = useState(0)
  const [mostVisitedDay, setMostVisitedDay] = useState('Monday')
  const [mostVisitedDayCount, setMostVisitedDayCount] = useState(0)

  useEffect(() => {
    const processReportData = () => {
      if (visitorsByDayReport) {
        let report = []
        let totalVisits = 0
        let mostVisitedDay = 'Monday'
        let mostVisitedDayCount = 0
        for (const day in visitorsByDayReport) {
          report.push(visitorsByDayReport[day])
          totalVisits += visitorsByDayReport[day]
          if (mostVisitedDayCount < visitorsByDayReport[day]) {
            mostVisitedDay = DAY_OF_WEEK[day]
            mostVisitedDayCount = visitorsByDayReport[day]
          }
        }
        setTotalVisits(totalVisits)
        setMostVisitedDay(mostVisitedDay)
        setMostVisitedDayCount(mostVisitedDayCount)
        setReportData(report)
      }
    }
    processReportData()
  }, [visitorsByDayReport])

  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: '51%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 1),
      hexToRGBA(theme.palette.warning.main, 0.1),
      hexToRGBA(theme.palette.warning.main, 0.1)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -30,
        left: -7,
        right: -4
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Visits in this week'
        subheader={`Total ${totalVisits} Visits`}
        subheaderTypographyProps={{ sx: { lineHeight: 1.429 } }}
        titleTypographyProps={{ sx: { letterSpacing: '0.15px' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options'>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          '& .apexcharts-canvas .apexcharts-text': { fill: theme.palette.text.secondary },
          pt: [`${theme.spacing(6)} !important`, `${theme.spacing(6)} !important`, `${theme.spacing(0)} !important`]
        }}
      >
        <ReactApexcharts type='bar' height={215} options={options} series={[{ data: reportData }]} />
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 0.75, fontWeight: 600 }}>Most Visited Day</Typography>
            <Typography variant='body2'>{`Total ${mostVisitedDayCount} Visits on ${mostVisitedDay}`}</Typography>
          </Box>
          <CustomAvatar skin='light' color='warning' variant='rounded'>
            <ChevronRight />
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsVisitsByDay
