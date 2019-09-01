import { dialogsAPI } from '../../utils/api';


const actions = {
    setDialogs: items => ({
        type: 'DIALOGS:SET_ITEMS',
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        dialogsAPI.getAllDialogs().then(({ data }) => {
            dispatch(actions.setDialogs(data))
        })
    }
}

export default actions;