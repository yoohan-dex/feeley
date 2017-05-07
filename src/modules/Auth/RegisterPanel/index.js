import React, { Component } from 'react';
import Model from '../../../components/ModelWithRoute';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import messages from '../messages';
const FormItem = Form.Item;
import './styles.css';

class RegisterPanel extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Model title={<FormattedMessage {...messages.register} />}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' },
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox style={{ fontSize: 12 }}>
                <FormattedMessage {...messages.rememberMe} />
              </Checkbox>,
            )}
            <div>
              <a className="login-form-forgot" href="">
                <FormattedMessage {...messages.forgotPassword} />
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                <FormattedMessage {...messages.registerButton} />
              </Button>
              <div>
                <FormattedMessage {...messages.or} />
                {' '}
                <a onClick={() => this.props.replace('login')}>
                  <FormattedMessage {...messages.orLogin} />
                </a>
              </div>
            </div>
          </FormItem>
        </Form>
      </Model>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  replace: (url: string) => {
    dispatch(replace(url));
  },
});

export default connect(state => state, mapDispatchToProps)(
  Form.create()(RegisterPanel),
);
