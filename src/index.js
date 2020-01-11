import React from 'react';
import ReactDOM from 'react-dom';

import Test_comp from './components/Test_comp';

const title = 'React JS Mastering';


ReactDOM.render(
  <Test_comp />,
  document.getElementById('root')
);

module.hot.accept();
 
