import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, ReadChekedIcon } from '../../components';

import '../Message/Message.scss';


const Message = ({ avatar, user, text, date, isMe, isReaded, isTyping, attachments }) => {
    return (
        <div className={classNames("message", { "message--isme": isMe, "message--image": attachments })}>
            <div className="message__content">
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className="message__info">
                    {(text || isTyping) && <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (<div class="message__typing-indicator">
                            <span />
                            <span />
                            <span />
                        </div>
                        )}
                    </div>}
                    <div className="message__icon">
                        <ReadChekedIcon isMe={isMe} isReaded={isReaded} />
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                            attachments.map(item => (
                                <div className="message__attachments-item">
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))}
                    </div>
                    {date && <time className="message__date">
                        <Time date={date} />
                    </time>}
                </div>
            </div>
        </div>
    );
}

Message.defaultProps = {
    user: {}
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool
}

export default Message;