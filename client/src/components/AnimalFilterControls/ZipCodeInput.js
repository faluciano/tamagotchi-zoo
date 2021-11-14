import {
    InputGroup,
    Form,
} from 'react-bootstrap'

const ZipCodeInput = ({ zipCode, setZipCode }) => {
    const handleChange = (e) => {
        setZipCode(e.target.value);
    }

    return (
        <InputGroup>
            <InputGroup.Text>Zip Code</InputGroup.Text>
            <Form.Control type='number' value={zipCode} placeholder="Your Postal Code" onChange={handleChange} />
        </InputGroup>
    );
}

export default ZipCodeInput;