import './App.css';
import {useRef, useState, useEffect} from 'react'
import { uploadFile } from './Api';
import {CopyToClipboard} from 'react-copy-to-clipboard'
function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState('')
  const [link, setLink] = useState('Here is your Link')
  const onUploadClick = () => {
    fileInputRef.current.click()
  }

  useEffect(()=>{
    const getImage = async () =>{
      if(file){
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)
        setLink(prev => prev = file.name)
        const response = await uploadFile(data)
      }

    }

    getImage()
  }, [file])

  return (
    <div className="App">
      <div className="container">
        <h1 className="mainHeading">File Sharing <span>Via URL</span></h1>
        <button onClick={onUploadClick}>Upload File</button>
        <input type="file" 
        ref = {fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
         />

         <br />
         <div className="linkShower">
          <a href={link} target='_blank'>{link}</a>
          <CopyToClipboard>
            
          </CopyToClipboard>
         </div>
      </div>
      
    </div>
  );
}

export default App;
