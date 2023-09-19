/*
    File: DateRange.jsx
    Author: Usman Shafique
    Copyright: 2023 - Usman Shafique
    Version: 1.0
    Created: 9/14/2023
    Last Modified: 9/14/2023
*/

import PropTypes from 'prop-types';
import DateTimeStamp from './DateTimeStamp';

DateRange.propTypes = {
    startDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
    endDate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
}

export default function DateRange({ startDate, endDate }) {
    return (
        <p className='w-[100%] text-center'>
            <DateTimeStamp date={startDate} /> – <DateTimeStamp date={endDate} />
        </p>
    );
}