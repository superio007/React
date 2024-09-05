import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TimeDisplay from './components/TimeDisplay';
import ProjectHead from './components/projecthead';
import Projectpara from './components/Projectpara';

function App() {

  return (
    <>
      <div className='container text-center my-3'>
        <ProjectHead/>
        <Projectpara/>
        <TimeDisplay/>
      </div>
    </>
  );
}

export default App
