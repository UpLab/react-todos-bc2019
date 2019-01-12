import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemContainer extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func,
    message: PropTypes.string.isRequired,
    open: PropTypes.bool,
  }

  state = {
    // isEdit: false,
    open: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      open: props.open,
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.open !== prevProps.open && this.state.open !== this.props.open) {
  //     this.setState({ open: this.props.open });
  //   }
  // }

  // toggleEdit = (isEdit = !this.state.isEdit) => this.setState({ isEdit });

  onChange = (e) => {
    // e.preventDefault();
    const { onChange } = this.props;
    const open = !this.state.open;
    this.setState({ open });
    onChange(open);
  }

  render() {
    const { open } = this.state;
    
    return (
      <TodoItem
        {...this.props}
        onChange={this.onChange}
        // toggleEdit={this.toggleEdit}
        // isEdit={isEdit}
        open={open}
      />
    )
  }
}

export default TodoItemContainer;
