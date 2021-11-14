import { useState, useEffect } from 'react';

import './App.css';
import './custom.scss';

import {
  Container,
} from 'react-bootstrap';

import Header from './components/Header';
import Intro from './components/Intro';
import AnimalFilterControls from './components/AnimalFilterControls';
import AnimalCard from './components/AnimalCard';
import AnimalInteractControls from './components/AnimalInteractControls';
import ButtonAnimalReroll from './components/ButtonAnimalReroll';
import AnimalOffcanvas from './components/AnimalOffcanvas';

import { useAuth0 } from '@auth0/auth0-react';

let gotAnimalFlag = false;

const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  const getUserID = () => user?.sub.split('|')[1];

  const [userAnimal, setUserAnimal] = useState(undefined);

  const getAnimalOnce = () => {
    if (gotAnimalFlag) return;
    gotAnimalFlag = true;

    fetch(`/login?id=${getUserID()}&time=${user.updated_at}`)
      .then(loginResponse => loginResponse.json())
      .then(loginJSON => {
        // If user had an animal
        if (Object.keys(loginJSON).length > 0) {
          setUserAnimal(loginJSON);
        }
      });
  };

  if (isAuthenticated && user) {
    getAnimalOnce();
  }

  const [species, setSpecies] = useState(['Dog', 'Cat']);

  const getSpeciesFromDB = () => {
    fetch('/getSpecies')
      .then(response => response.json())
      .then(json => json.map(speciesObject => speciesObject.name))
      .then(arrSpecies => setSpecies(arrSpecies));
  }

  useEffect(() => {
    getSpeciesFromDB();
  }, []);

  const [zipCode, setZipCode] = useState('07047');
  const [selectedSpecies, setSelectedSpecies] = useState(species[0]);

  const [offcanvasShow, setOffcanvasShow] = useState(false);


  if (isLoading) return <div>Loading ...</div>

  return (
    <div className="App">
      <Header />

      <Intro />

      <AnimalFilterControls
        zipCode={zipCode}
        setZipCode={setZipCode}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
        id={getUserID()}
        userAnimal={userAnimal}
        setUserAnimal={setUserAnimal}
        species={species} />

      <Container className='p-4'>
        <AnimalCard
          id={getUserID()}
          setOffcanvasShow={setOffcanvasShow}
          animal={userAnimal} />
        <AnimalInteractControls userAnimal={userAnimal} id={getUserID()} />
      </Container>

      <Container>
        <ButtonAnimalReroll
          id={getUserID()}
          zipCode={zipCode}
          selectedSpecies={selectedSpecies}
          userAnimal={userAnimal} setUserAnimal={setUserAnimal} />

      </Container>

      <AnimalOffcanvas
        offcanvasShow={offcanvasShow}
        setOffcanvasShow={setOffcanvasShow}
        animal={userAnimal} />
    </div >
  );
}

export default App;
