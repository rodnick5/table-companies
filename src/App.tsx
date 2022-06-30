import React from 'react';
import ReactModal from 'react-modal';
import { Provider } from 'react-redux';
import TableMain from './components/Table/TableMain';
import {store} from './shared/store'


ReactModal.setAppElement("#root");
function App() {
  return (
      <Provider store={store}>
      <TableMain  />
      </Provider>
  )
}

export default App;
