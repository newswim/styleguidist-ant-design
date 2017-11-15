import React from 'react'
import { bool, string, array, func, object, oneOfType, shape } from 'prop-types'
import { Cascader as AntCascader } from 'antd'

const options = [
  {
    value: 'file',
    label: 'Files',
    children: [
      {
        value: 'applications',
        label: 'Applications',
        children: [
          {
            value: 'sketch',
            label: 'Sketch'
          },
          {
            value: 'minesweeper',
            label: 'Minesweeper'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

function onChange(value) {
  console.log(value)
}

const Cascader = props => (
  <AntCascader options={options} onChange={onChange} {...props} />
)

Cascader.propTypes = {
  /** whether allow clear */
  allowClear: bool,
  /** change value on each selection if set to true */
  changeOnSelect: bool,
  /** additional css class */
  className: string,
  /** initial selected value
 * @see see: [CascaderOptionType[]](https://git.io/vMMoK) */
  defaultValue: array,
  /** whether disabled select */
  disabled: bool,
  /** render function of displaying selected options <br /> `(label, selectedOptions) => ReactNode`` */
  displayRender: func,
  /** expand current item when click or hover, one of 'click' 'hover' */
  expandTrigger: string,
  /** Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and, position it relative. <br /> signature: `Function(triggerNode)`
 * @see [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010)*/
  getPopupContainer: func,
  /** To load option lazily, and it cannot work with `showSearch` <br /> signature: `(selectedOptions) => void` */
  loadData: func,
  /** Specify content to show when no result matches. */
  notFoundContent: string,
  /** data options of cascade */
  options: object,
  /** input placeholder */
  placeholder: string,
  /** additional className of popup overlay */
  popupClassName: string,
  /** use preset popup align config from builtinPlacements: <br /> `bottomLeft`, `bottomRight`, `topLeft`, `topRight`*/
  popupPlacement: string,
  /** Whether show search input in single mode. One of: `object|bool` */
  showSearch: oneOfType([object, bool]),
  /** input size, one of `large` `default` `small` */
  size: string,
  /** additional style NOTE: Shouldn't this be `object`? */
  style: string,
  /** selected value
   * @see [CascaderOptionType[]](https://git.io/vMMoK) */
  value: shape({
    value: string,
    label: string,
    disabled: bool,
    children: object
  }),
  /** callback when finishing cascader select <br /> signature: `(value, selectedOptions) => void`*/
  onChange: func,
  /** callback when popup shown or hidden <br /> signature: `(value) => void` */
  onPopupVisibleChange: func,
  /** set visible of cascader popup */
  popupVisible: bool
}

Cascader.defaultProps = {
  allowClear: true,
  changeOnSelect: false,
  defaultValue: [],
  disabled: false,
  displayRender: label => label.join(' / '),
  expandTrigger: 'click',
  getPopupContainer: () => document.body,
  notFoundContent: 'Not Found',
  placeholder: 'Please select',
  popupPlacement: 'bottomLeft',
  showSearch: false,
  size: 'default'
}

export default Cascader
