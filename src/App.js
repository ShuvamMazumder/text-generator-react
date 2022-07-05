
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App (){
  const [alert,setAlert] = useState()
    const showAlert = (message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      showAlert('done','success');
    }

  return (
    <>
      <Navbar title = 'TextGen'/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading = 'enter text for analyse'/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
