import React from 'react'
import { bool, func } from 'prop-types'
import { Checkbox as AntCheckbox } from 'antd'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`)
}

const Checkbox = props => (
  <AntCheckbox onChange={onChange} {...props}>
    Checkbox
  </AntCheckbox>
)

Checkbox.propTypes = {
  /** Specifies whether the checkbox is selected.	 */
  checked: bool,
  /** Specifies the initial state: whether or not the checkbox is selected. */
  defaultChecked: bool,
  /** Disable checkbox */
  disabled: bool,
  /** The callback function that is triggered when the state changes. `Function(e:Event)` */
  onChange: func
}

Checkbox.defaultProps = {
  // checked: false,
  defaultChecked: false,
  disabled: false
}

export default Checkbox
