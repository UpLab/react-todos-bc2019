import React from 'react'
import { Card, CardHeader, UncontrolledDropdown, DropdownToggle, DropdownItem,CardBody, Table, DropdownMenu} from 'reactstrap';
import { TodoItem } from 'components';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoListCard = ({ todos, actions, title, onToggleItem, onRemoveItem }) => (
  <Card className="card-tasks">
    <CardHeader>
      <h6 className="title d-inline">{title} ({todos.length})</h6>
      {/* <p className="card-category d-inline"> today</p> */}
      {
        actions.length > 0 ? (
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              className="btn-icon"
              color="link"
              data-toggle="dropdown"
              type="button"
            >
              <i className="tim-icons icon-settings-gear-63" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink" right>
              { actions.map(({ title, action }) => (
                <DropdownItem
                  onClick={action}
                  key={title}
                >
                  {title}
                </DropdownItem>
              )) }
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : null 
      }
    </CardHeader>
    <CardBody>
      <div className="table-full-width table-responsive">
        <Table>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            component="tbody"
          >
            { 
              todos.map((item) => (
                <TodoItem
                  key={item._id}
                  {...item}
                  onChange={() => onToggleItem(item._id)}
                  onRemove={() => onRemoveItem(item._id)}
                />
              )) 
            }
          </ReactCSSTransitionGroup>
        </Table>
      </div>
    </CardBody>
  </Card>
);

TodoListCard.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.shape({
    
  })),
  todos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    message: PropTypes.string,
    dueDate: PropTypes.number,
    open: PropTypes.bool,
  })).isRequired,
  onToggleItem: PropTypes.func.isRequired,
}

TodoListCard.defaultProps = {
  title: 'Todos',
  actions: [],
  todos: [],
}

export default TodoListCard;
