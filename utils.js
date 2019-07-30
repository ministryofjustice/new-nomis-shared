const moment = require('moment')

const properCase = word =>
  typeof word === 'string' && word.length >= 1 ? word[0].toUpperCase() + word.toLowerCase().slice(1) : word

const isBlank = str => !str || /^\s*$/.test(str)

/**
 * Converts a name (first name, last name, middle name, etc.) to proper case equivalent, handling double-barreled names
 * correctly (i.e. each part in a double-barreled is converted to proper case).
 * @param name name to be converted.
 * @returns name converted to proper case.
 */
const properCaseName = name =>
  isBlank(name)
    ? ''
    : name
        .split('-')
        .map(properCase)
        .join('-')

const toFullName = ({ firstName, lastName, name }) =>
  isBlank(name) ? `${properCaseName(firstName)} ${properCaseName(lastName)}` : name

const getHoursMinutes = timestamp => {
  const indexOfT = timestamp.indexOf('T')
  if (indexOfT < 0) {
    return ''
  }
  return timestamp.substr(indexOfT + 1, 5)
}

const isToday = date => {
  if (date === 'Today') {
    return true
  }
  const searchDate = moment(date, 'DD/MM/YYYY')
  return searchDate.isSame(moment(), 'day')
}

const getPrisonDescription = user => {
  const caseLoadOption = user.caseLoadOptions
    ? user.caseLoadOptions.find(option => option.caseLoadId === user.activeCaseLoadId)
    : undefined
  return caseLoadOption ? caseLoadOption.description : user.activeCaseLoadId
}

const stripAgencyPrefix = (location, agency) => {
  const parts = location && location.split('-')
  if (parts && parts.length > 0) {
    const index = parts.findIndex(p => p === agency)
    if (index >= 0) {
      return location.substring(parts[index].length + 1, location.length)
    }
  }
  return location
}

const getEventDescription = event => {
  if (event.eventType === 'PRISON_ACT' || event.event === 'PA') {
    return event.comment
  }
  if (event.comment) {
    return `${event.eventDescription} - ${event.comment}`
  }
  return event.eventDescription
}

const forenameToInitial = name => {
  if (!name) return null

  let formattedName = name

  if (name.includes(',')) {
    formattedName = name
      .split(',')
      .map(part => part.trim())
      .reverse()
      .join(' ')
  }

  return `${formattedName.charAt()} ${formattedName.split(' ').pop()}`
}

// noinspection JSUnusedGlobalSymbols
module.exports = {
  properCase,
  properCaseName,
  toFullName,
  getHoursMinutes,
  isToday,
  getPrisonDescription,
  getEventDescription,
  stripAgencyPrefix,
  forenameToInitial,
}
