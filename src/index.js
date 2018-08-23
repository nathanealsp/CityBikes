import React from 'react';
import ReactDOM from 'react-dom';
import AppToRender from './AppToRender';
import './styles.css';
// APP ENTRY
function App() {
  return (
    <div className="App">
      <AppToRender />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
