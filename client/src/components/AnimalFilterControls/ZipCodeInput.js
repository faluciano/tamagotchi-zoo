import {
    InputGroup,
    FormControl,
} from 'react-bootstrap'

const ZipCodeInput = ({ species }) => {
    return (
        <InputGroup>
            <InputGroup.Text>Zip Code</InputGroup.Text>
            <FormControl placeholder="Your Postal Code">
            </FormControl>
        </InputGroup>
    );
}

export default ZipCodeInput;