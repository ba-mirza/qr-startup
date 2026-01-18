import crypto from 'node:crypto'

export const generateRegistrationToken = (organizationId: string): string => {
  return `REG-${organizationId.slice(0, 8)}-${crypto.randomBytes(8).toString('hex')}`
}

export const generateAttendanceToken = (organizationId: string): string => {
  return `ATT-${organizationId.slice(0, 8)}-${crypto.randomBytes(8).toString('hex')}`
}

export const calculateQRExpiry = (workEndTime: string): Date => {
  const now = new Date()
  const [hours, minutes] = workEndTime.split(':').map(Number)

  const expiryDate = new Date(now)
  expiryDate.setHours(hours, minutes, 0, 0)

  if (now > expiryDate) {
    expiryDate.setDate(expiryDate.getDate() + 1)
  }

  return expiryDate
}
