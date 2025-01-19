import React from 'react'
import Hero from '../components/hero.jsx';
import LatestColl from "../components/LatestColl.jsx";


function home() {
  return (
    <div>
      <Hero />
      <LatestColl />
    </div>
  );
}

export default home