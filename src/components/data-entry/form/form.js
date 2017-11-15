import React from 'react'
import { object, bool, oneOf, func } from 'prop-types'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ maxWidth: 300 }}
      >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="" style={{ float: 'right' }}>
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: '100%' }}
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  /** Decorated by Form.create() will be automatically set this.props.form property, so just pass to form, you don't need to set it by yourself after 1.7.0. */
  form: object,
  /** Hide required mark of all form items */
  hideRequiredMark: bool,
  /** Use horizontal layout(Deprecated after 2.8) */
  horizontal: bool,
  /** Use inline alignment(Deprecated after 2.8)	 */
  inline: bool,
  /** Define form layout(Support after 2.8) */
  layout: oneOf(['horizontal', 'vertical', 'inline']),
  /** Use vertical layout(Deprecated after 2.8) */
  vertical: bool,
  /** Defines a function will be called if form data validation is successful.
   * <br /> Signature: `Function(e:Event)` */
  onSubmit: func
}

LoginForm.defaultProps = {
  hideRequiredMark: false,
  horizontal: true,
  inline: false,
  layout: 'horizontal',
  vertical: false
}

export default Form.create()(LoginForm)
