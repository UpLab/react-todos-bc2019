import React from 'react'
import { Button, Card, CardBody, Input, InputGroupAddon, InputGroup } from 'reactstrap';
import { DatePicker } from 'components';


const TodoForm = ({ onSubmit, message, handleChangeMessage, handleChangeDueDate, dueDate, submitButtonLabel = 'Add +' }) => {
  const submittable = message.length > 3;
  return (
    <Card className="TodoForm">
      <CardBody>
        <form onSubmit={onSubmit}>
          <InputGroup size="lg">
            <Input type="text" value={message} onChange={handleChangeMessage}  placeholder="Describe your task..."/>
            <InputGroupAddon addonType="append">
              <DatePicker 
                date={dueDate}
                onChange={handleChangeDueDate}
                placeholder={''}
                noBorder
                disabled={submittable}
              />
              <Button 
                type="submit"
                color="default"
                onClick={onSubmit}
                disabled={submittable}
              >
                {submitButtonLabel}
              </Button>
            </InputGroupAddon>
          </InputGroup>
          
        </form>
      </CardBody>
    </Card>
  )
}

export default TodoForm;
