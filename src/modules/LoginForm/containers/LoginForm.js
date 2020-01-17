import { connect } from 'react-redux';
import { withFormik } from 'formik';

import { userActions } from '../../../redux/actions';

import LoginForm from '../components/LoginForm';
import validateForm from '../../../utils/validate';

import store from '../../../redux/store';


const LoginFormConnect = connect(state => state, userActions)(LoginForm);

const LoginFormContainer = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
    }),

    validate: values => {
        let errors = {};

        validateForm({ isAuth: true, values, errors })

        return errors;
    },
    
    handleSubmit: (values, { setSubmitting }) => {
        store.dispatch(userActions.fetchUserLogin(values))
            .then(() => {
                setSubmitting(false)
            }).catch(() => {
                setSubmitting(false)
            });
    },
    displayName: 'LoginForm',
})(LoginFormConnect);

export default LoginFormContainer;