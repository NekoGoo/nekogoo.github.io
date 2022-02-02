import React from 'react';
// import '../styles/index.scss';
import './Items';
import Recipes from './Recipes';

function App() {
  return (
    <>
      <section className="hero" />
      <main>
        <section>
          <h1>O hai, React</h1>
        </section>
      </main>
      <Recipes />
    </>
  );
}

export { App };
