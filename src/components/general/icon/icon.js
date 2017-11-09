import React from 'react'
import { string, bool, object } from 'prop-types'
import { Icon as AntDIcon } from 'antd'

export const Icon = props => <AntDIcon {...props} />

Icon.propTypes = {
  /** Rotate icon with animation */
  spin: bool,
  /** style properties of icon, like fontSize and color */
  style: object,
  /** Type of ant design icon */
  type: string
}

Icon.defaultProps = {
  spin: false
}

export default Icon
