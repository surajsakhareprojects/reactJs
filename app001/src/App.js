import Header from './components/Header/header';
import './App.css';
import CoreBlock from './components/core_block/core_block';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CoreBlock />
      <h2> Hello Brother</h2>
    </div>
  );
}

export default App;
