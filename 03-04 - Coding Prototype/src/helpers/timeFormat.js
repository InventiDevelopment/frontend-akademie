/**
 * Handlebars helper that formats date using moment.js
 * @param {Date} d - Date.
 * @param {object} block - Handlebars object.
 * @returns Formatted date as String.
 */

import moment from 'moment'

module.exports = function (d, block) {
  var f = block.hash.format || 'HH:mm'
  return moment(new Date(d)).format(f)
}
