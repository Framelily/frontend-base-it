import moment from 'moment'
import numeral from 'numeral'
import { BigNumber } from 'bignumber.js'

/**
 * Format number with numeral.js
 *
 * formatNumber(10)
 * fixed = true
 * - 10.00
 *
 * formatNumber(10, false)
 * fixed = false
 * - 10
 *
 * @returns string
 */
export const formatNumber = (value: string | number, fixed = true) => {
  const number = BigNumber(value)
  if (number.isGreaterThan(0) && number.isLessThan(0.01)) return number.toFixed()
  if (number.isGreaterThan(1000000000)) return numeral(value).format(`0,0a`)
  if (fixed) return numeral(value).format(`0,0.00`)
  return numeral(value).format(`0,0.[00]`)
}

/**
 * Format Date with moment.js
 *
 * @returns string
 */
export const formatDate = (value: Date | string | number, format = 'DD/MM/YYYY - HH:mm') => {
  return moment(value).format(format)
}

/**
 * Parse short string
 *
 * @param string
 * @param length
 * @returns
 */
export function shortenString(string: string, length: number): string {
  if (!string) return ''
  if (length < 5) return string
  if (string.length <= length) return string
  return string.slice(0, 4) + '...' + string.slice(string.length - length + 5, string.length)
}
