import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from '../'

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items }) => {
    return (
        <div 
        ref={blockRef}
        className={classNames("messages", { "messages__loading": isLoading })}>
            {
                isLoading ? (
                    <Spin tip="Loading..." size="large" />
                ) : items && !isLoading ? (
                    items.length > 0 ? (
                        items.map(item => <Message key={item._id} {...item} />)
                    ) : (
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No messages yet" />
                        )
                ) : (
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Please select a chat to start messaging" />
                        )
            }
        </div>
    )
}

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;

