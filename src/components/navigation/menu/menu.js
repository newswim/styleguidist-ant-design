import React from 'react'
import { array, bool, number, string, object, func } from 'prop-types'
import { Menu as AntDMenu, Icon } from 'antd'
const SubMenu = AntDMenu.SubMenu
const Item = AntDMenu.Item
const MenuItemGroup = AntDMenu.ItemGroup

export default class Menu extends React.Component {
  handleClick = e => {
    console.log('click ', e)
  }
  render() {
    return (
      <AntDMenu
        onClick={this.handleClick}
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <MenuItemGroup key="g1" title="Item 1">
            <Item key="1">Option 1</Item>
            <Item key="2">Option 2</Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Item 2">
            <Item key="3">Option 3</Item>
            <Item key="4">Option 4</Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Item key="5">Option 5</Item>
          <Item key="6">Option 6</Item>
          <SubMenu key="sub3" title="Submenu">
            <Item key="7">Option 7</Item>
            <Item key="8">Option 8</Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Item key="9">Option 9</Item>
          <Item key="10">Option 10</Item>
          <Item key="11">Option 11</Item>
          <Item key="12">Option 12</Item>
        </SubMenu>
      </AntDMenu>
    )
  }

  static propTypes = {
    /** array with the keys of default opened sub menus */
    defaultOpenKeys: array,
    /** array of strings with the keys of default selected menu items */
    defaultSelectedKeys: array,
    /** specifies the collapsed status when menu is inline mode */
    inlineCollapsed: bool,
    /** indent px of inline menu item on each level	number */
    inlineIndent: number, // 24
    /** type of the menu; 'vertical', 'horizontal', and 'inline' modes are supported */
    mode: string,
    /** Allow selection of multiple items */
    multiple: bool,
    /** array with the keys of currently opened sub menus */
    openKeys: array,
    /** allow selecting menu items */
    selectable: bool,
    /** array with the keys of currently selected menu items */
    selectedKeys: array,
    /** style of the root node */
    style: object,
    /** color theme of the menu	string: light | dark */
    theme: string,
    /** callback executed when a menu item is clicked	function({ item, key, keyPath }) */
    onClick: func,
    /** callback executed when a menu item is deselected, only supported for multiple mode	function({ item, key, selectedKeys }) */
    onDeselect: func,
    /** called when open/close sub menu	function(openKeys: string[]) */
    onOpenChange: func,
    /** callback executed when a menu item is selected	function({ item, key, selectedKeys }) */
    onSelect: func
  }

  static defaultProps = {
    inlineIndent: 24,
    mode: 'vertical',
    multiple: false,
    selectable: true,
    theme: 'light',
    onOpenChange: () => {}
  }
}
