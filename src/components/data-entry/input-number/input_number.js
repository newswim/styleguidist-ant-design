import React from 'react'
import { bool, func, number, oneOfType, string } from 'prop-types'
import { InputNumber as AntInputNumber } from 'antd'

const InputNumber = props => <AntInputNumber {...props} />

InputNumber.propTypes = {
  /** initial value */
  defaultValue: number,
  /**	disable the input	 */
  disabled: bool,
  /** Specifies the format of the value presented.	`function(value: number | string): string` */
  formatter: func,
  /** max vale */
  max: number,
  /** min value */
  min: number,
  /** Specifies the value extracted from formatter.	`function( string): number` */
  parser: func,
  /** precision of input value */
  precision: number,
  /** width of input box */
  size: string,
  /** The number to which the current value is increased or decreased. It can be an integer or decimal. */
  step: oneOfType([number, string]),
  /** current value */
  value: number,
  /** The callback triggered when the value is changed.	`function(value: number | string)` */
  onChange: func
}

InputNumber.defaultProps = {
  disabled: false,
  max: Infinity,
  min: -Infinity,
  step: 1
}

export default InputNumber
