import { notifications } from '../../utils/helpers';
import { userAPI } from '../../utils/api';


const Actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data
    }),

    fetchUserData: () => dispatch => {
        userAPI
            .getMe()
            .then(({ data }) => {
                dispatch(Actions.setUserData(data));
            });
    },

    fetchUserLogin: (postData) => dispatch => {
        return userAPI
            .login(postData)
            .then(({ data }) => {
                const { status, token } = data;
                if (status === 'error') {
                    notifications({
                        title: 'Authorizations error!',
                        text: 'Incorrect password or email.',
                        type: 'error'
                    })
                } else {
                    notifications({
                        title: 'Authorizations SUCCESS!',
                        type: 'success'
                    })
                    window.axios.defaults.headers.common['token'] = token;
                    window.localStorage['token'] = token;
                    dispatch(Actions.fetchUserData())
                }
            })
    }
}

export default Actions;