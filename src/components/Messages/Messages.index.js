import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from '../'

const Messages = ({ items }) => {
    return items ? (
        <div>
            {items.map(item => (
                <Message {...item} />
            ))}
        </div>
    ) : (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Please select a chat to start messaging" />)
}

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;

