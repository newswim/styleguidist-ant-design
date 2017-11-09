import React from 'react'
import { number, func, array, bool, string } from 'prop-types'
import { Pagination as AntDPagination } from 'antd'

const Pagination = props => <AntDPagination {...props} />

Pagination.propTypes = {
  /** current page number */
  current: number,
  /** default initial page number */
  defaultCurrent: number,
  /** default number of data items per page */
  defaultPageSize: number,
  /** to customize item innerHTML */
  itemRender: func,
  /** number of data items per page	number */
  pageSize: number,
  /** specify the sizeChanger options	string[]	'10', '20', '30', '40' */
  pageSizeOptions: array,
  /** determine whether you can jump to pages directly */
  showQuickJumper: bool,
  /** determine whether pageSize can be changed */
  showSizeChanger: bool,
  /** to display the total number and range	Function(total, range) */
  showTotal: func,
  /** whether to use simple mode */
  simple: bool,
  /** specify the size of Pagination, can be set to small */
  size: string,
  /** total number of data items */
  total: number,
  /** a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments	Function(page, pageSize) */
  onChange: func,
  /** a callback function, executed when pageSize is changed	Function(current, size) */
  onShowSizeChange: func
}

Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  showQuickJumper: false,
  showSizeChanger: false,
  size: '',
  total: 0,
  onChange: () => {},
  onShowSizeChange: () => {}
}

export default Pagination
