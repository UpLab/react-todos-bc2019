import React, { Component } from 'react'
import TodoForm from './TodoForm';

export default class TodoFormContainer extends Component {
  constructor(props) {
    super(props);

    const { message = '', dueDate } = props;

    this.state = {
      message,
      dueDate,
    }
  }

  initialState = {
    message: '',
  }

  state = { ...this.initialState }

  handleChangeMessage = (e) => this.setState({ message: e.target.value })

  handleChangeDueDate = (dueDate) => this.setState({ dueDate })

  onSubmit = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    // const { message, dueDate } = this.state;
    // this.props.onSubmit({ message, dueDate: dueDate ? dueDate.toDate().getTime() : dueDate });
    this.setState({ ...this.initialState });
  }

  render() {
    const { message, dueDate } = this.state;
    return (
      <TodoForm
        message={message}
        dueDate={dueDate}
        handleChangeMessage={this.handleChangeMessage}
        handleChangeDueDate={this.handleChangeDueDate}
        onSubmit={this.onSubmit}
      />
    )
  }
}
