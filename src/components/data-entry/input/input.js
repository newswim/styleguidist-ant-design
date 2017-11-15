import React from 'react'
import { oneOfType, string, node, bool, oneOf, func } from 'prop-types'
import { Input as AntInput } from 'antd'

const Input = props => <AntInput {...props} />

Input.propTypes = {
  /** The label text displayed after (on the right side of) the input field.	 */
  addonAfter: oneOfType([string, node]),
  /** The label text displayed before (on the left side of) the input field. */
  addonBefore: oneOfType([string, node]),
  /** The initial input content */
  defaultValue: string,
  /** Whether the input is disabled. */
  disabled: bool,
  /** The ID for input */
  id: string,
  /** The prefix icon for the Input. */
  prefix: oneOfType([string, node]),
  /** The size of the input box. Note: in the context of a form, the large size is used. Available: `large`, `default`, `small` */
  size: oneOf[('default', 'small', 'large')],
  /** The suffix icon for the Input.	 */
  suffix: oneOfType([string, node]),
  /** The type of input, `text` or `textarea`. (Note: type=textarea are deprecated after 2.12, please use Input.TextArea) */
  type: string,
  /** The input content value	 */
  value: string,
  /** The callback function that is triggered when Enter key is pressed. Sig: `function(e)`	 */
  onPressEnter: func
}

Input.defaultProps = {
  disabled: false,
  size: 'default',
  type: 'text'
}

export default Input
