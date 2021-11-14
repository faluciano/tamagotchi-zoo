import { useState, useEffect } from 'react';

import './App.css';
import './custom.scss';

import {
  Container,
} from 'react-bootstrap';

import Header from './components/Header';
import AnimalCard from './components/AnimalCard';
import AnimalInteractControls from './components/AnimalInteractControls';
import AnimalFilterControls from './components/AnimalFilterControls';

import { useAuth0 } from '@auth0/auth0-react';

let gotAnimalFlag = false;

const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  const getUserID = () => user?.sub.split('|')[1];

  const [userAnimal, setUserAnimal] = useState(undefined);

  const getAnimalOnce = () => {
    if (gotAnimalFlag) return;
    gotAnimalFlag = true;

    fetch(`/login?id=${getUserID()}`)
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

  if (isLoading) return <div>Loading ...</div>

  return (
    <div className="App">
      <Header />

      <Container className='p-4'>
        <AnimalCard animal={userAnimal} />
        <AnimalInteractControls userAnimal={userAnimal} id={getUserID()}/>
      </Container>



      <AnimalFilterControls
        id={getUserID()}
        userAnimal={userAnimal}
        setUserAnimal={setUserAnimal}
        species={species} />
    </div >
  );
}

export default App;
