export const ROOM_TYPE = {
  PUBLIC: '6413ebf956917f74591468fb',
  PRIVATE: '6413ebf956917f74591468fc'
}

export const ABNORMAL_EVENT_TYPE = {
  STRANGER: '64191579e00817dbbf4c6501',
  OVERCROWD: '64191579e00817dbbf4c6502',
  FIRE: '64191579e00817dbbf4c6503',
  OTHER: '64191579e00817dbbf4c6504'
}

export const ALERT_TYPE = {
  STRANGER: '1',
  COMPARE_ACCESS: '2',
  ACCESS_REQUEST: '3',
  OVERLOAD: '4',
  FIRE: '5'
}

export const REQUEST_ACCESS_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  DECLINED: 'declined',
  CANCELED: 'canceled'
}

export const ROLE = {
  ADMIN_ID: '638c5f1c700c4c50a7ffc01d',
  MANAGER_ID: '638c5f6a700c4c50a7ffc027',
  SUBSCRIBER_ID: '638c5f71700c4c50a7ffc028'
}

export const MQTT_MESSAGE_TYPE = {
  ABNORMAL_OVERCROWD: 'ABNORMAL_EVENT_OVERCROWD',
  ABNOMAL_STRANGER: 'ABNORMAL_EVENT_STRANGER'
}

export const ABNORMAL_EVENT_REPORT_MODE = {
  TODAY: '1d',
  HALF_MONTH: '15ds',
  MONTH: '1m',
  HALF_YEAR: '6ms',
  YEAR: '1y',
  FIVE_YEARS: '5yrs'
}

export const ACCESS_EVENT_SORT_BY = {
  TIME_ACS: 'time-asc',
  TIME_DESC: 'time-desc'
}

export const DAY_OF_WEEK = {
  Mo: 'Monday',
  Tu: 'Tuesday',
  We: 'Wednesday',
  Th: 'Thursday',
  Fr: 'Friday',
  Sa: 'Saturday',
  Su: 'Sunday'
}
