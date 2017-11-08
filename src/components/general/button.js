import React from 'react'
import { string } from 'prop-types'
import { Button as AntDButton } from 'antd'

export const Button = ({ text }) => <AntDButton type="primary">{text}</AntDButton>

Button.propTypes = {
  /** Some nice text to display inside of the button */
  text: string
}

export default Button
