import './App.css';
import NavBar from './components/NavBarComponent/index.js';
import ItemListContainer from './components/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons';

function App() {
  return (
    <div>
     <NavBar />
     <ItemListContainer />

    </div>
  );
}

export default App;
