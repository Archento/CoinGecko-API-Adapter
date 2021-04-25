/* global fetch */

/**
 * Asynchronous backend call helper
 * @description Makes use of native fetch API for asynchronous backend calls
 * @export self
 * @param {String} method holds method types (GET,POST,PUT,DELETE)
 * @param {String} url defines the URL the call refers to
 * @param {*} [inputData=null] given data for the call
 * @returns {Promise} Promise
 */
export async function sendAjax (method = null, url = null, inputData = null) {
  const headers = {
    'Content-Type': 'application/json, charset=utf-8'
  }
  let response
  if (inputData) {
    response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(inputData)
    })
  } else {
    response = await fetch(url, {
      method: method,
      headers: headers
    })
  }
  if (response.ok) {
    const jsonValue = await response.json()
    return Promise.resolve(jsonValue)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}
