import React from 'react'
import 'react-dates/initialize'; 
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/constants';
import { DATE_FORMAT } from 'constants/date';
// import { PRIMARY_COLOR } from 'constants/colors';

const DatePicker = (props) => {
  const { date, onChange, focused, onFocusChange, ...rest } = props;
  return (
    <SingleDatePicker
      date={date} // momentPropTypes.momentObj or null,
      onDateChange={onChange} // PropTypes.func.isRequired,
      focused={focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={onFocusChange}
      showClearDate
      showDefaultInputIcon
      inputIconPosition={ICON_AFTER_POSITION}
      displayFormat={DATE_FORMAT}
      {...rest}
    />
  )
}

export default DatePicker
