import React from 'react';
import PropTypes from 'prop-types';

import svgReaded from '../../assets/icons/Readed.svg';
import svgUnReaded from '../../assets/icons/UnReaded.svg';

const ReadChekedIcon = ({ isMe, isReaded }) =>
    (isMe &&
    (isReaded ? (
        <img className="message__icon-readed" src={svgReaded} alt="Cheked icon" />
    ) : (
            <img className="message__icon-readed message__icon-readed--no" src={svgUnReaded} alt="UnCheked icon" />
        ))) ||
        null;

ReadChekedIcon.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}
export default ReadChekedIcon;

