import React from 'react'
import { arrayOf, bool, func, string } from 'prop-types'
import { Menu, Dropdown as AntDDropdown, Icon } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.yahoo.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.bing.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

const Dropdown = () => {
  return (
    <AntDDropdown overlay={menu}>
      <a className="ant-dropdown-link" href="">
        Hover me <Icon type="down" />
      </a>
    </AntDDropdown>
  )
}

Dropdown.propTypes = {
  /** whether the dropdown menu is disabled */
  disabled: bool,
  /** the dropdown menu */
  overlay: func,
  /** placement of pop menu: bottomLeft bottomCenter bottomRight topLeft topCenter topRight */
  placement: string,
  /** the trigger mode which executes the drop-down action	Array<click|hover> */
  trigger: arrayOf(string),
  /** whether the dropdown menu is visible */
  visible: bool,
  /** a callback function takes an argument: visible, is executed when the visible state is changed	Function(visible) */
  onVisibleChange: func
}

Dropdown.defaultProps = {
  overlay: Menu,
  placement: 'bottomLeft',
  trigger: ['hover']
}

export default Dropdown
