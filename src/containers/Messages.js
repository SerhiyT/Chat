import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from '../redux/actions';
import { Messages as BaseMessages } from '../components/';


const Messages = ({ currentDialogId, fetchMessages, items }) => {

    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId)
        }
    }, [currentDialogId]);

    return <BaseMessages
        items={items}
    />;
};


export default connect(
    ({ dialogs, messages }) => ({
        currentDialogId: dialogs.currentDialogId,
        items: messages.items
    }),
    messagesActions
)(Messages);