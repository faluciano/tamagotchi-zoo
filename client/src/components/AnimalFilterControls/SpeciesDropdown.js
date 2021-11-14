import {
    InputGroup,
    Dropdown,
} from 'react-bootstrap'

import SpeciesDropdownItem from './SpeciesDropdown/SpeciesDropdownItem';

const SpeciesDropdown = ({ selectedSpecies, setSelectedSpecies, species }) => {

    const dropdownItems = species.map((s, i) =>
        <SpeciesDropdownItem species={s} key={i} />
    );

    const handleSelect = (e) => {
        setSelectedSpecies(e);
    };

    return (
        <InputGroup className='flex-nowrap'>
            <InputGroup.Text>Species</InputGroup.Text>
            <Dropdown title='Species Dropdown' onSelect={handleSelect}>
                <Dropdown.Toggle>
                    {selectedSpecies}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropdownItems}
                </Dropdown.Menu>
            </Dropdown>
        </InputGroup>
    );
}

export default SpeciesDropdown;