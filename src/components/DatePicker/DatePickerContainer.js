import React, { Component } from 'react'
import DatePicker from './DatePicker';
// import moment from 'moment';

export class DatePickerContainer extends Component {
  state = {
    focused: null,
    date: null,
  }

  onFocusChange = ({ focused }) => this.setState({ focused })

  onChange = (date) => this.props.onChange(date)

  render() {
    const { date, focused } = this.state;
    return (
      <DatePicker
        date={date}
        focused={focused}
        onFocusChange={this.onFocusChange}
        {...this.props}
        onChange={this.onChange}
      />
    )
  }
}

export default DatePickerContainer;
