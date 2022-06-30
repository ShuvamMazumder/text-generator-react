
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App (){
  return (
    <>
      <Navbar title = 'TextGen'/>
      <div className="container my-3">
      <TextForm heading = 'enter text for analyse'/>
      </div>
    </>
  );
}

export default App;
