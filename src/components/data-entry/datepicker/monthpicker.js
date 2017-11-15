import React from 'react'
import { DatePicker } from 'antd'
const { MonthPicker } = DatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}

const MonthDatePicker = props => <MonthPicker onChange={onChange} {...props} />

export default MonthDatePicker
