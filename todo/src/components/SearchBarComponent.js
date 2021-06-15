import { Form, FormControl } from "react-bootstrap";

const SearchBarComponent = ({ handleTextChange }) => {
  return (
    <Form className="search-bar">
      <FormControl
        type="text"
        placeholder="Search..."
        onChange={handleTextChange}
        size="lg"
      />
    </Form>
  );
};

export default SearchBarComponent;
