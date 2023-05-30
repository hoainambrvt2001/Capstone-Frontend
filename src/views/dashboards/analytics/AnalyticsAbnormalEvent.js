// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'

const CustomTooltip = data => {
  const { active, payload } = data
  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map(i => {
            return (
              <Box sx={{ display: 'flex', alignItems: 'center' }} key={i.dataKey}>
                <Circle sx={{ color: i.fill, mr: 2.5, fontSize: '0.6rem' }} />
                <span>
                  {i.dataKey} : {i.payload[i.dataKey]}
                </span>
              </Box>
            )
          })}
      </div>
    )
  }

  return null
}

const AnalyticsAbnormalEvent = ({ abnormalEventsReport }) => {
  return (
    <Card>
      <CardHeader
        title='Abnormal events report'
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', mb: 4 }}>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: 'rgb(115, 103, 240)' }} />
            <Typography>Stranger</Typography>
          </Box>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: 'rgba(115, 103, 240, .7)' }} />
            <Typography>Overcrowd</Typography>
          </Box>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: 'rgba(115, 103, 240, .5)' }} />
            <Typography>Fire</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: 'rgba(115, 103, 240, .3)' }} />
            <Typography>Others</Typography>
          </Box>
        </Box>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <AreaChart height={350} data={abnormalEventsReport} margin={{ left: -20 }}>
              <CartesianGrid />
              <XAxis dataKey='name' reversed={false} />
              <YAxis orientation={'left'} />
              <Tooltip content={CustomTooltip} />
              <Area dataKey='stranger' stackId='Stranger' stroke='0' fill='rgb(115, 103, 240)' />
              <Area dataKey='overcrowd' stackId='Overcrowd' stroke='0' fill='rgba(115, 103, 240, .7)' />
              <Area dataKey='fire' stackId='Fire' stroke='0' fill='rgba(115, 103, 240, .5)' />
              <Area dataKey='other' stackId='Others' stroke='0' fill='rgba(115, 103, 240, .3)' />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsAbnormalEvent
