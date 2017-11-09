import React from 'react'
import { bool, func, string } from 'prop-types'
import { Button as AntDButton } from 'antd'

export const Button = props => (
  <AntDButton type="primary" {...props}>
    {props.text}
  </AntDButton>
)

Button.propTypes = {
  /** Some nice text to display inside of the button -- **OVERRIDE** */
  text: string,
  /** make background transparent and invert text and border colors, added in 2.7 */
  ghost: bool,
  /** set the original html type of button,
   *  @see see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) */
  htmlType: string,
  /** set the icon of button, see: Icon component */
  icon: string,
  /** set the loading status of button -- boolean | { delay: number } */
  loading: bool,
  /** can be set to circle or omitted */
  shape: string,
  /** can be set to small large or omitted */
  size: string,
  /** can be set to primary ghost dashed danger(added in 2.7) or omitted (meaning default) */
  type: string,
  /** set the handler to handle click event */
  onClick: func
}

Button.defaultProps = {
  ghost: false,
  htmlType: 'button',
  loading: false,
  size: 'default',
  type: 'default'
}

export default Button
