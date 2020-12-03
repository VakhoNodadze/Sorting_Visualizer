import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './state/reducer';
import Sorter from './components/Sorter';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sorter />
      </div>
    </Provider>
  );
}

export default App;
