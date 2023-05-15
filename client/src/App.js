import './App.css';
import {useRef} from 'react'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mainHeading">File Sharing <span>Via URL</span></h1>
        <button>Upload File</button>
        <input type="file" />
      </div>

    </div>
  );
}

export default App;
