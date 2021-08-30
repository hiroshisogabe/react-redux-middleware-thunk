import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataById } from './store/fetchSlice';
import { REQUEST_STATUS } from './constants/contants';

function App() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const requestStatus = useSelector((state) => state.requestStatus);
  const fetchedData = useSelector((state) => state.fetchedData);

  const onChangeInput = (event) => {
    console.log(event)
    setInputText(event.target.value);
  } 
  const handleAction = () => {
    dispatch(fetchDataById(inputText));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          People #id:
          <input type="text" onChange={onChangeInput} />
          <input 
            type="button" 
            value="search" 
            disabled={requestStatus === REQUEST_STATUS.LOADING} 
            onClick={handleAction} />
        </p>
        <p>
          Request Status: <span>{requestStatus}</span>
        </p>
        <p>
          Response:
          <textarea
            rows="10"
            cols="50"
            value={JSON.stringify(fetchedData)}
            readOnly>
          </textarea>
        </p>
      </header>
    </div>
  );
}

export default App;
