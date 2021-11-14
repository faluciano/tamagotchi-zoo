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

  // if (isLoading) return <div>Loading ...</div>

  const getAnimal = () => {
    if (gotAnimalFlag) return;
    gotAnimalFlag = true;

    const id = user.sub.split('|')[1];
    fetch(`/login?id=${id}`)
      .then(loginResponse => loginResponse.json())
      .then(loginJSON => {
        // If an empty object returned
        if (Object.keys(loginJSON).length === 0) {
          // Create an animal for this user
          fetch('/createAnimal', {
            method: 'POST',
            body: new URLSearchParams({
              id: id,
              postal: '07047',
              preference: 'Dog',
            }).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
              console.log('created new animal in DB');
              console.log(createJSON);
            });
        }
        // User had an animal
        else {
          console.log('animal found in DB');
          console.log(loginJSON);
        }
      });
  };

  if (isAuthenticated && user) {
    getAnimal();
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


  return (
    <div className="App">


      <Header />

      <Container className='p-4'>
        <AnimalCard />
      </Container>

      <AnimalInteractControls />

      <AnimalFilterControls species={species} />
    </div >
  );
}

export default App;
