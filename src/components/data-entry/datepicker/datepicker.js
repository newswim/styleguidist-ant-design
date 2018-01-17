import React from 'react'
import { bool, string, func, object, oneOfType } from 'prop-types'
import { DatePicker as AntDatePicker } from 'antd'
const { MonthPicker, RangePicker, WeekPicker } = AntDatePicker;

function onChange(date, dateString) {
  console.log(date, dateString)
}

const DatePicker = props => (
  <div>
    <AntDatePicker onChange={onChange} {...props} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" {...props} />
    <br />
    <RangePicker onChange={onChange} {...props} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" {...props} />
  </div>

)

DatePicker.propTypes = {
  /** Whether to show clear button */
  allowClear: bool,
  /** picker className */
  className: string,
  /** determine whether the DatePicker is disabled */
  disabled: bool,
  /** specify the date that cannot be selected <br /> `(currentDate: moment) => boolean`*/
  disabledDate: func,
  /** to set the container of the floating layer, while the default is to create a div element in body
   * <br /> `function(trigger)` */
  getCalendarContainer: func,
  /** localization configuration
   * @see [default config](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json)*/
  locale: object,
  /** open state of picker */
  open: bool,
  /** placeholder of date input. One of: `string|RangePicker[]` */
  placeholder: oneOfType([string, object]),
  /** to customize the style of the popup calendar */
  popupStyle: object,
  /** determine the size of the input box, the height of `large` and `small`, are 32px and 22px respectively, while default size is 28px */
  size: string,
  /** to customize the style of the input box */
  style: object,
  /** a callback function, can be executed whether the popup calendar is popped up or closed
   * <br />signature: `function(status)` */
  onOpenChange: func
}

DatePicker.defaultProps = {
  allowClear: true,
  className: '',
  disabled: false,
  popupStyle: {},
  style: {}
}

export default DatePicker
