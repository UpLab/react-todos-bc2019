import React from 'react'
import moment from 'moment';
import { DATE_FORMAT } from 'constants/date';

const DueDate = ({ date, format = DATE_FORMAT}) => {
  const formatted = moment(date).format(format);

  return (
    <p className="text-danger">{formatted}</p>
  );
}

export default DueDate;
