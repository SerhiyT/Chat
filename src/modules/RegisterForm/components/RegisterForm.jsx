import React from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';


class RegisterForm extends React.Component {
    render() {
        const success = false;
        return (
            <div>
                <div className='auth__top'>
                    <h2>Sign up</h2>
                    <p>Please register your account</p>
                </div>
                <Block>
                    {!success ? (
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="E-mail"
                                    type="email"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Name"
                                    type="text"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Password"
                                    type="password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Repeat the password"
                                    type="password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    size="large">Sign up
                            </Button>
                            </Form.Item>
                            <Link className='auth__register-link' to='/login'>Sign in</Link>
                        </Form>
                    ) : (
                            <div className="auth__success-block">
                                <div>
                                    <Icon
                                        type="info-circle"
                                        theme="twoTone" />
                                </div>
                                <h2>Confirm your account</h2>
                                <p>We sent confirmation on your E-mail</p>
                            </div>
                        )}
                </Block>
            </div>
        )
    }
}


export default RegisterForm;