import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import AddTodoComponent from "./AddTodoComponent";

const SearchBarComponent = ({ handleTextChange }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Form className="search-bar">
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={handleTextChange}
            size="lg"
          />
          <InputGroup.Append className="d-flex align-=content-center">
            <Button variant="outline-success" onClick={() => setModal(true)}>
              <i className="fas fa-plus"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      <AddTodoComponent show={modal} setShow={setModal} />
    </>
  );
};

export default SearchBarComponent;
