import React, { Fragment } from 'react';
import { TodoListCard, TodoForm } from 'components';

const TodoList = (props) => {
  const { todos, onCreateTodo, onToggleTodo, onRemoveTodo, actions } = props;
  return (
    <Fragment>
      <TodoForm onSubmit={onCreateTodo} />
      <TodoListCard
        todos={todos}
        onToggleItem={onToggleTodo}
        onRemoveItem={onRemoveTodo}
        actions={actions}
      />
    </Fragment>
  )
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList;
