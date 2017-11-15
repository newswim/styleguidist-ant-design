import React from 'react'
import {
  arrayOf,
  bool,
  element,
  func,
  object,
  string,
  shape,
  oneOfType
} from 'prop-types'
import { AutoComplete as AntAutoComplete, Input } from 'antd'

function onSelect(value) {
  console.log('onSelect', value)
}

class AutoComplete extends React.Component {
  state = {
    dataSource: []
  }

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value]
    })
  }

  render() {
    const { dataSource } = this.state
    return (
      <AntAutoComplete
        dataSource={dataSource}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        {...this.props}
      />
    )
  }

  static propTypes = {
    /** Show clear button, effective in multiple mode only. */
    allowClear: bool,
    /** backfill selected item the input when using keyboard. */
    backfill: bool,
    /** (for customize input element)	customize input element <br /> :: `HTMLInputElement` / `HTMLTextAreaElement` / `React.ReactElement`	`<Input />` */
    childrenOfCustom: element,
    /** (for dataSource)	Data source for autocomplete<br /> :: `React.ReactElement` / `Array<React.ReactElement>` */
    children: element,
    /** Data source for autocomplete: `{ value: string; text: string; }`
     * @see see: [DataSourceItemType[]](https://github.com/ant-design/ant-design/blob/1bf0bab2a7bc0a774119f501806e3e0e3a6ba283/components/auto-complete/index.tsx#L12)
     * */
    dataSource: object,
    /** Whether active first option by default */
    defaultActiveFirstOption: bool,
    /** Initial selected option. - string|string[]|{ key: string, label: string|`ReactNode` }|Array<{ key: string, label: string|`ReactNode` }> */
    defaultValue: oneOfType([
      string,
      arrayOf(string),
      shape({ key: string, label: oneOfType([string, element]) }),
      arrayOf(shape({ key: string, label: oneOfType([string, element]) }))
    ]),
    /** Whether disabled select */
    disabled: bool,
    /** If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function, returns true, the option will be included in the filtered set; Otherwise, it will be excluded. */
    filterOption: oneOfType([bool, func]),
    /** Which prop value of option will render as content of select. */
    optionLabelProp: string,
    /** placeholder of input. */
    placeholder: string,
    /** selection option */
    value: oneOfType([
      string,
      arrayOf(string),
      shape({ key: string, label: oneOfType([string, element]) }),
      arrayOf(shape({ key: string, label: oneOfType([string, element]) }))
    ]),
    /** Called when select an option or input value change, or value of input is changed	function(value, label) */
    onChange: func,
    /** Called when searching items.	function(value) */
    onSearch: func,
    /** Called when a option is selected. param is option's value and option instance.	function(value, option) */
    onSelect: func
  }

  static defaultProps = {
    allowClear: false,
    backfill: false,
    children: <Input />,
    defaultActiveFirstOption: true,
    disabled: false,
    filterOption: true,
    optionLabelProp: 'children'
  }
}

export default AutoComplete
