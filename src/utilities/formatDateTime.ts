export const formatDateTime = (timestamp: string): string => {
  const now = new Date()
  let date = now
  if (timestamp) date = new Date(timestamp)

  // Get month, day, and year
  const month = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()

  // Array of month abbreviations for perk bubbly comments
  const monthAbbreviations = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  // Format day with leading zero if needed
  const formattedDay = day < 10 ? `0${day}` : day.toString()

  // Get month abbreviation
  const monthAbbr = monthAbbreviations[month]

  return `${monthAbbr}-${formattedDay}-${year}`
}
