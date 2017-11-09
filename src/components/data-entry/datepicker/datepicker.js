import React from 'react'
import { DatePicker as AntDatePicker } from 'antd'
const { MonthPicker, RangePicker } = AntDatePicker

function onChange(date, dateString) {
  console.log(date, dateString)
}

const DatePicker = props => <AntDatePicker onChange={onChange} {...props} />

// const AntMonthPicker = props => (
//   <MonthPicker onChange={onChange} placeholder="Select month" {...props} />
// )
//
// const AntRangePicker = props => <RangePicker onChange={onChange} {...props} />
//
// export { AntMonthPicker, AntRangePicker }

export default DatePicker
