import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import enLocale from 'date-fns/locale/en';

import '../Message/Message.scss';


const Message = ({ avatar, user, text, date }) => {
    return (
        <section className="message">
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <time className="message__date">{distanceInWordsToNow(date, { addSuffix: true, locale: enLocale })}</time>
            </div>
        </section>

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