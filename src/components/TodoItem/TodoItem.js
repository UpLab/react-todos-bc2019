import React, { Fragment } from 'react'
import { Button, FormGroup, UncontrolledTooltip, Label } from 'reactstrap';
import { DueDate } from 'components';

const TodoItem = (props) => {
  const { message, dueDate, open, _id, onChange, onRemove, isEdit } = props;
  return (
    <tr>
      <td width="30">
        <FormGroup check>
          <Label check>
            <input checked={!open} onChange={onChange} type="checkbox" />
            <span className="form-check-sign">
              <span className="check" />
            </span>
          </Label>
        </FormGroup>
      </td>
      <td>
        <p className="title">{isEdit ? 'editing:': null} {message}</p>
        { dueDate ? (
          <DueDate date={dueDate} />
        ) : null }
      </td>
      <td className="td-actions text-right">
        { typeof onRemove === 'function' ?
          <Fragment>
            <Button
              color="link"
              id={`tooltip_remove_${_id}`}
              title=""
              type="button"
              onClick={onRemove}
            >
              <i className="tim-icons icon-trash-simple" />
            </Button>
            <UncontrolledTooltip
              delay={0}
              target={`tooltip_remove_${_id}`}
              placement="right"
            >
              Remove Task
            </UncontrolledTooltip>
          </Fragment>
        : null}
      </td>
      {/*
        <td className="td-actions text-right">
          <Button
            color="link"
            id={`tooltip_${_id}`}
            title=""
            type="button"
            onClick={() => toggleEdit()}
          >
            <i className="tim-icons icon-pencil" />
          </Button>
          <UncontrolledTooltip
            delay={0}
            target={`tooltip_${_id}`}
            placement="right"
          >
            Edit Task
          </UncontrolledTooltip>
        </td>
      */}
    </tr>
  )
}

export default TodoItem;
