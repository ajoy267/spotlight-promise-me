import { useEffect } from 'react';
import {
  fetchBreweries1,
  fetchBreweries2,
  fetchCatFacts,
  fetchPinBall,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchBreweries1();
    fetchBreweries2();
    fetchPinBall();
    fetchCatFacts();
  });
  return <h1>Hello World</h1>;
}
