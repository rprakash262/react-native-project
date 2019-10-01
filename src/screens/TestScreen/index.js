import React from 'react';

import TestProvider from '../../providers/TestProvider';
import TestScreen from './TestScreen';

function index() {
  return (
    <TestProvider>
      <TestScreen />
    </TestProvider>
  );
}

export default index;
