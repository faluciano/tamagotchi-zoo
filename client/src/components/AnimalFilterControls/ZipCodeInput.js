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
            <Form.Control type='number' value={zipCode} placeholder='07047' onChange={handleChange} />
        </InputGroup>
    );
}

export default ZipCodeInput;