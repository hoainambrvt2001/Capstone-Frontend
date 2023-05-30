import { format } from 'date-fns'

// ** Customize modification text:
export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// ** Customize
export const customizeRenderDate = number => {
  return format(new Date(number), 'P')
}

// ** Customize
export const customizeRenderTime = number => {
  return format(new Date(number), 'p')
}

// ** Customize
export const customizeRenderDateTime = number => {
  return format(new Date(number), 'Pp')
}
