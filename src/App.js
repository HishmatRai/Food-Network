import React from 'react';
import BasicRouter from './Config/Router/Router'
import {Provider} from 'react-redux';
import store from './Store/';
function App() {
  return (
    <div>
      <Provider store={store}>
           <BasicRouter />
      </Provider>
    </div>
  );
}

export default App;
