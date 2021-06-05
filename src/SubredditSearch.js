import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";

const SubredditSearch = () => {
  return (
    <Form inline>
      <InputGroup.Prepend>
        <InputGroup.Text id="sr-search">r/</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        placeholder="Subreddit Search"
        className="mr-sm-2"
        id="sr-search"
      />
      <Button variant="outline-success" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SubredditSearch;
