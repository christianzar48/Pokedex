import './App.css';
import Main from './index-pokedex/Main';
import Cards from './Pokemon-cards/Cards';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import CardList from './cardList/CardList';


function App() {
  return (
    <div className="App">
        
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="pokemon/:nombre" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;