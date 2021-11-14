import React from 'react';

import './App.css';
import './custom.scss';

import {
  Container,
} from 'react-bootstrap';

import Header from './components/Header';
import AnimalCard from './components/AnimalCard';
import Controls from './components/Controls';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>

  return (
    <div className="App">
      <Header />

      <Container className='p-4'>
        <AnimalCard />
      </Container>

      <Controls />
    </div >
  );
}

export default App;
