/**
 * @typedef {Object} ReturnObject
 * @description - Return object for requests in the class. Helper for reference.
 * @param {boolean} success - Whether the response status code returned a successful code (>200 && <300)
 * @param {string} message - The response status message
 * @param {number} code - The response status code
 * @param {object|*} data - The body data in json format from the request
 * @property {boolean} success - Whether the response status code returned a successful code (>200 && <300)
 * @property {string} message - The response status message
 * @property {number} code - The response status code
 * @property {object|*} data - The body data in json format from the request
 */
export function ReturnObject (success, message, code, data) {
  return { success, message, code, data }
}

/**
 * @description Internal helper to check if parameter is a string
 * @function isString
 * @param {*} str
 * @returns {boolean}
 */
export const isString = (str) => {
  return (typeof str === 'string' || str instanceof String)
}

/**
 * @description Internal helper to check if string is empty
 * @function isStringEmpty
 * @param {*} str
 * @returns {boolean}
 */
export const isStringEmpty = (str) => {
  if (!isString(str)) return false
  return (str.length === 0)
}

/**
 * @description Internal helper to check if parameter is a date
 * @function isDate
 * @param {*} date
 * @returns {boolean}
 */
export const isDate = (date) => {
  if (isString(date) || isArray(date) || date === undefined || date == null) return false
  return (date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date))
}

/**
 * @description Internal helper to check if parameter is an object
 * @function isObject
 * @param {*} obj
 * @returns {boolean}
 */
export const isObject = (obj) => {
  if (isArray(obj) || isDate(obj)) return false
  return (obj !== null && typeof obj === 'object')
}

/**
 * @description Internal helper to check if parameter is a number
 * @function isNumber
 * @param {*} num
 * @returns {boolean}
 */
export const isNumber = (num) => {
  return (!isNaN(num) && !isNaN(parseInt(num)))
}

/**
 * @description Internal helper to check if parameter is an array
 * @function isArray
 * @param {*} arr
 * @returns {boolean}
 */
export const isArray = (arr) => {
  return Array.isArray(arr)
}

// Please handle your warnings with a proper Logger
export const __WARN__ = (...params) => {
  console.log(params) // <- change this
}
