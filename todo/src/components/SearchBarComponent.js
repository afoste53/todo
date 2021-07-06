import {
  Button,
  ButtonGroup,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";

const SearchBarComponent = ({ handleTextChange }) => {
  return (
    <Form className="search-bar">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search..."
          onChange={handleTextChange}
          size="lg"
        />
        <InputGroup.Append className="d-flex align-=content-center">
          <ButtonGroup>
            <Button variant="outline-success">
              <i className="fas fa-plus"></i>
            </Button>
            <Button variant="outline-danger">
              <i className="far fa-trash-alt"></i>
            </Button>
          </ButtonGroup>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchBarComponent;
