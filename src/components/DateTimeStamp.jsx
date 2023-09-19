/*
    File: DateTimeStamp.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import PropTypes from 'prop-types';
import {
    isDateValid,
    formatDateForTimeTag
} from '../utils/date';

DateTimeStamp.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
}

export default function DateTimeStamp({ date }) {
    if (isDateValid(date)) {
        return (
            <time dateTime={date.toISOString().substr(0, 7)}>{formatDateForTimeTag(date)}</time>
        );
    }

    return (
        <span>{date}</span>
    );
}