import React from 'react';
import ReactDOM from 'react-dom';

import Contact1 from './components/Contact1';

const title = 'hot module replacement';


ReactDOM.render(
  <Contact1 />,
  document.getElementById('root')
);

module.hot.accept();
 
