import React from 'react'
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from '../../../components/';
import { validateField } from '../../../utils/helpers';


const LoginForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
    } = props;

    return (
        <div>
            <Block>
                <div className='auth__top'>
                    <h2>Sign in</h2>
                    <p>Please log in to your account</p>
                </div>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item validateStatus={validateField("email", touched, errors)}
                        help={!touched.email ? '' : errors.email}
                        hasFeedback>
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
                    <Form.Item validateStatus={validateField("password", touched, errors)}
                        help={!touched.password ? '' : errors.password}
                        hasFeedback>
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
                        <Button
                            disabled={isSubmitting}
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            size="large">Log in
                            </Button>
                    </Form.Item>
                    <Link className='auth__register-link' to='/signup' >Register now!</Link>
                </Form>
            </Block>
        </div>
    )
}


export default LoginForm;