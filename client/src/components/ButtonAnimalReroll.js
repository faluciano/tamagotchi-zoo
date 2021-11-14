import {
    Button,
} from 'react-bootstrap'

const ButtonAnimalReroll = ({ id, zipCode, selectedSpecies, userAnimal, setUserAnimal }) => {
    const render = userAnimal !== undefined;

    const createAnimal = () => {
        setUserAnimal(undefined);
        fetch('/createAnimal', {
            method: 'POST',
            body: new URLSearchParams({
                id: id,
                postal: zipCode,
                preference: selectedSpecies,
            }).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
                setUserAnimal(createJSON);
            });
    };

    const handleClick = (e) => {
        createAnimal();
    };

    return (
        render && <Button className='d-block mx-auto' onClick={(e) => handleClick(e)}>Get New Animal</Button>
    );
}

export default ButtonAnimalReroll;