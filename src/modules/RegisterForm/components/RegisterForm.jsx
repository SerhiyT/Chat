import React from 'react'
import { Form, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block, FormField } from '../../../components';


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
            <Block>
                <div className='auth__top'>
                    <h2>Sign up</h2>
                    <p>Please sign up your account</p>
                </div>
                {!success ? (
                    <Form onSubmit={handleSubmit} className="login-form">
                        <FormField
                            name='email'
                            placeholder='Enter your email'
                            icon='mail'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name='fullname'
                            placeholder='Name'
                            icon='user'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            icon='lock'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <FormField
                            name='password_2'
                            type='password'
                            placeholder='Repeat the password'
                            icon='lock'
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            values={values}
                        />

                        <Form.Item>
                            <Button
                                onClick={handleSubmit}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large">Sign up
                            </Button>
                        </Form.Item>
                        <Link className='auth__register-link' to='/signin'>Sign in</Link>
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