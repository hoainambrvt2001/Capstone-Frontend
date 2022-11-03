// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Circle } from 'mdi-material-ui'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const AnalyticsOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    plotOptions: {
      radialBar: {
        hollow: { size: '55%' },
        dataLabels: {
          value: {
            offsetY: 15
          }
        }
      }
    },
    grid: {
      padding: {
        bottom: -12
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    labels: ['People']
  }

  return (
    <Card>
      <CardContent sx={{ '& .apexcharts-canvas .apexcharts-text': { fontWeight: 600, fontSize: '1.5rem' } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            Room Available
          </Typography>
        </Box>
        <ReactApexcharts type='radialBar' height={300} series={[70]} options={options} />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Circle sx={{ color: 'primary.main' }} />
              <Typography variant='subtitle1' sx={{ ml: 2, color: 'text.secondary' }}>
                In room
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant='subtitle1' sx={{ color: 'text.primary' }}>
                80 people
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Circle sx={{ color: 'grey.200' }} />
              <Typography variant='subtitle1' sx={{ ml: 2, color: 'text.secondary' }}>
                Available
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant='subtitle1' sx={{ color: 'text.primary' }}>
                40 people
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsOverview
