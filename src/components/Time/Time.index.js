import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import enLocale from 'date-fns/locale/en';


const Time = ({ date }) =>
    distanceInWordsToNow(date, { addSuffix: true, locale: enLocale })

Time.propTypes = {
    date: PropTypes.string
}

export default Time;

