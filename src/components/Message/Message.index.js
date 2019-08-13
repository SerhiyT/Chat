import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import enLocale from 'date-fns/locale/en';
import classNames from 'classnames';

import svgReaded from '../../assets/icons/Readed.svg';
import svgUnReaded from '../../assets/icons/UnReaded.svg';

import '../Message/Message.scss';


const Message = ({ avatar, user, text, date, isMe, isReaded }) => {
    return (
        <div className={classNames("message", { "message--isme": isMe })}>
            <div className="message__content">
                {isMe && isReaded ? (
                    <img
                        src={svgReaded}
                        alt="Cheked icon"
                        className="message__iconCheked" />
                ) : (
                        <img
                            src={svgUnReaded}
                            alt="UnCheked icon"
                            className="message__iconCheked" />
                    )}
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className="message__info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <time className="message__date">
                        {distanceInWordsToNow(date, { addSuffix: true, locale: enLocale })}
                    </time>
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
}

export default Message;