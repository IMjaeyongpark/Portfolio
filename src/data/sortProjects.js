const periodDates = (period = '') => (period.match(/\d{4}(?:\.\d{2}){0,2}/g) ?? []).map((date) => {
  const [year, month = '01', day = '01'] = date.split('.')
  return Number(`${year}${month}${day}`)
})

export function sortProjects(items) {
  return [...items].sort((a, b) => {
    const aDates = periodDates(a.period)
    const bDates = periodDates(b.period)
    const aEnd = /진행\s*중|현재/.test(a.period ?? '') ? Infinity : (aDates.at(-1) ?? 0)
    const bEnd = /진행\s*중|현재/.test(b.period ?? '') ? Infinity : (bDates.at(-1) ?? 0)
    if (aEnd !== bEnd) return bEnd - aEnd
    return (bDates[0] ?? 0) - (aDates[0] ?? 0)
  })
}
