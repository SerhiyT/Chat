import React, { Component } from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components/';


class LoginForm extends Component {
    render() {
        return (
            <div>
                <div className='auth__top'>
                    <h2>Sign in</h2>
                    <p>Please log in to your account</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large">Log in
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/register' >Register now!</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}


export default LoginForm;