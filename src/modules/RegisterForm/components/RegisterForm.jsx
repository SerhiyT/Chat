import React from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from '../../../components';

const success = false;

const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = props;
    return (
        <div>
            <div className='auth__top'>
                <h2>Sign up</h2>
                <p>Please sign up your account</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item validateStatus={
                            !touched.email ? '' : errors.email ? 'error' : 'success'} hasFeedback>
                            <Input
                                id="email"
                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Enter your email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Name"
                                type="text"
                            />
                        </Form.Item>
                        <Form.Item validateStatus={
                            !touched.password ? '' : errors.password ? 'error' : 'success'} hasFeedback>
                            <Input
                                id="password"
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Enter your password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
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
                                onClick={handleSubmit}
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


export default RegisterForm;