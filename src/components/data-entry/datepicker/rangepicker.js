import React from 'react'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}

const RangeDatePicker = props => <RangePicker onChange={onChange} {...props} />

export default RangeDatePicker
