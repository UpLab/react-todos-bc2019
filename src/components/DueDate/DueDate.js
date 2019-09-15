import React from 'react'
import moment from 'moment';

const DueDate = ({ date, format}) => {
  const formatted = React.useMemo(() => format ? moment(date).format(format) : moment(date).fromNow(), [date, format]);

  return (
    <p className="text-danger">{formatted}</p>
  );
}

export default DueDate;
