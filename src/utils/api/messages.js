import { axios } from '../../core';

export default {
    getAllMessagesById: (id) => axios.get('/messages?dialog=' + id)
};