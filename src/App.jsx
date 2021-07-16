import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const handlerAsyncPOST = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/asyn', {
      method: 'POST',
      body: JSON.stringify({
        "name": "Alexander",
        "age": "27"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    console.log(data);
  }

  const handlerGenerator = async e=> {
    e.preventDefault();
    try {
      const response = JSON.stringify({
        "title": inp
      })
      const data = await fetch('http://localhost:5000/api/generator', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: response
      })
    } catch(err) {
      console.log('Error in handlerGenerator');
    }
  }

  const handlerAsyncGET = async e=> {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/asyn');
    const data = await response.json();
    console.log(data);
  }
  const handleGetGenerator = async (e) => {
    const response = await fetch(`http://localhost:5000/api/generator`)
    if(response.status ===200) {
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a');
      link.href = downloadUrl
      link.download = 'do.docx'
      document.querySelector('.App').appendChild(link)
      link.click();
      link.remove();
    }
  }

  const [inp, setInp] = useState('')

  const handleInput = (e) => {
    setInp(e.target.value);
  }

  return (
    <div className="App">
      <button onClick={handlerAsyncPOST}>отправка</button>
      <button onClick={handlerAsyncGET}>Получение</button>
      <input name='generator' type='text' onChange={handleInput} value={inp} />
      <button onClick={handlerGenerator}>Generator</button>
      <button onClick={handleGetGenerator}>get generator</button>

    </div>
  );
}

export default App;
