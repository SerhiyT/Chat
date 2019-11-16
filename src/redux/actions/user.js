import { userAPI } from '../../utils/api';


const actions = {
    setUserData: data => ({
        type: 'USER:SET_DATA',
        payload: data
    }),
    fetchUserLogin: (postData) => dispatch => {
        return userAPI
            .login(postData)
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
    }
}

export default actions;