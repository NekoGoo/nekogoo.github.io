import React from 'react';
import { render } from 'react-dom';
// import { App } from './components/App';
import { NavHeader } from './components/Shared/NavHeader';

// Attach React to DOM
// render(<h1>Yo, sup world!</h1>, document.getElementById("root"));
// render(<App />, document.getElementById('root'));
render(<NavHeader />, document.getElementById('root'));
