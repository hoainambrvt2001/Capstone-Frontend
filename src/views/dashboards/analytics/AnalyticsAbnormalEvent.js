// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import BellOutline from 'mdi-material-ui/BellOutline'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const data = [
  {
    name: '15/01',
    Strangers: 80,
    RoomOverloaded: 130,
    Fires: 150,
    Others: 210
  },
  {
    name: '15/02',
    Strangers: 100,
    RoomOverloaded: 150,
    Fires: 170,
    Others: 380
  },
  {
    name: '15/03',
    Strangers: 80,
    RoomOverloaded: 140,
    Fires: 160,
    Others: 220
  },
  {
    name: '15/04',
    Strangers: 100,
    RoomOverloaded: 150,
    Fires: 170,
    Others: 380
  },
  {
    name: '15/05',
    Strangers: 50,
    RoomOverloaded: 90,
    Fires: 110,
    Others: 150
  },
  {
    name: '15/06',
    Strangers: 125,
    RoomOverloaded: 90,
    Fires: 100,
    Others: 65
  },
  {
    name: '15/07',
    Strangers: 70,
    RoomOverloaded: 110,
    Fires: 130,
    Others: 210
  },
  {
    name: '15/08',
    Strangers: 100,
    RoomOverloaded: 150,
    Fires: 170,
    Others: 380
  },
  {
    name: '15/09',
    Strangers: 80,
    RoomOverloaded: 100,
    Fires: 120,
    Others: 180
  },
  {
    name: '15/10',
    Strangers: 30,
    RoomOverloaded: 60,
    Fires: 70,
    Others: 110
  }
]

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

const RechartsBarChart = ({ direction }) => {
  // ** States
  const [endDate, setEndDate] = useState(null)
  const [startDate, setStartDate] = useState(new Date())

  const CustomInput = forwardRef((props, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return (
      <TextField
        {...props}
        size='small'
        value={value}
        inputRef={ref}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <BellOutline />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <ChevronDown />
            </InputAdornment>
          )
        }}
      />
    )
  })

  const handleOnChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Card>
      <CardHeader
        title='Abnormal Events'
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <DatePicker
            selectsRange
            id='recharts-bar'
            endDate={endDate}
            selected={startDate}
            startDate={startDate}
            onChange={handleOnChange}
            placeholderText='Click to select a date'
            customInput={<CustomInput start={startDate} end={endDate} />}
          />
        }
      />
      <CardContent>
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap' }}>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: '#826af9' }} />
            <Typography>Strangers</Typography>
          </Box>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: '#9f87ff' }} />
            <Typography>Room Overloaded</Typography>
          </Box>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: '#d2b0ff' }} />
            <Typography>Fires</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: '#f8d3ff' }} />
            <Typography>Others</Typography>
          </Box>
        </Box>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <BarChart height={350} data={data} barSize={15} style={{ direction }} margin={{ left: -20 }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' reversed={direction === 'rtl'} />
              <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
              <Tooltip content={CustomTooltip} />
              <Bar dataKey='Strangers' stackId='a' fill='#826af9' />
              <Bar dataKey='RoomOverloaded' stackId='a' fill='#9f87ff' />
              <Bar dataKey='Fires' stackId='a' fill='#d2b0ff' />
              <Bar dataKey='Others' stackId='a' fill='#f8d3ff' radius={[15, 15, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RechartsBarChart
