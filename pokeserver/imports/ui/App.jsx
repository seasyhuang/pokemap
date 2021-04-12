import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to PokeServer!</h1>
    <p>We are building a mobile app</p>
    <Hello/>
    <Info/>
  </div>
);
