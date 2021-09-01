import './App.css';
import Display from './components/Display'
import PokemonState from './context/pokemon/PokemonState'

function App() {
  return (
    <PokemonState>
      <div className="App">
        <Display />
      </div>
    </PokemonState>
    
  );
}

export default App;
