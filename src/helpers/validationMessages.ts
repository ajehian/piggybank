export const requiredMsg = (label: string) => `${label} is required`

export const fixedLengthMsg = (label: string, length: number) =>
  `${label} must be ${length} characters`
export const minLengthMsg = (label: string, min: number) =>
  `${label} must be at least ${min} characters`
export const maxLengthMsg = (label: string, min: number) =>
  `${label} must be less than ${min} characters`

export const isAlphanumericMsg = (label: string) => `${label} must only contain letters or numbers`
export const isIntegerMsg = (label: string) => `${label} must only contain numbers`
