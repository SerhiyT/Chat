import React from 'react';
import { Route } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../modules';

import '../Auth/Auth.scss';


const Auth = () => (
    <section className='auth'>
        <div className="auth__content">

            <Route exact path="/login"
                render={() => <LoginForm />} />
            <Route path="/register"
                render={() => <RegisterForm />} />

        </div>
    </section>
)

export default Auth;