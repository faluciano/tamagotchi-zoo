import {
    Dropdown,
} from 'react-bootstrap'

const SpeciesDropdownItem = ({ species }) => {
    // console.log(species);

    return (
        <Dropdown.Item eventKey={species}>
            {species}
        </Dropdown.Item>
    );
}

export default SpeciesDropdownItem;