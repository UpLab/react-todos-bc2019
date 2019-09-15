import React from 'react';
import { CardHeader, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

const TodoListHeader = ({ title, actions }) => {
  return (
    <CardHeader>
      <h6 className="title d-inline">{title}</h6>
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
  );
}

export default TodoListHeader;
