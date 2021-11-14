import { useState } from 'react';
import {
    InputGroup,
    Dropdown,
} from 'react-bootstrap'

import SpeciesDropdownItem from './SpeciesDropdown/SpeciesDropdownItem';

const SpeciesDropdown = ({ species }) => {
    const [selectedValue, setSelectedValue] = useState(species.length > 0 ? species[0] : '');

    const dropdownItems = species.map((s, i) =>
        <SpeciesDropdownItem species={s} key={i} />
    );

    const handleSelect = (e) => {
        setSelectedValue(e);
    };

    return (
        <InputGroup className='flex-nowrap'>
            <InputGroup.Text>Species</InputGroup.Text>
            <Dropdown title='Species Dropdown' onSelect={handleSelect}>
                <Dropdown.Toggle>
                    {selectedValue}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropdownItems}
                </Dropdown.Menu>
            </Dropdown>
        </InputGroup>
    );
}

SpeciesDropdown.defaultProps = {
    species: ['Dog', 'Cat'],
}

export default SpeciesDropdown;