import React, { useState } from 'react';
import './App.css';
import { Game } from './components/Game';

function App() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="App">
      <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
    </div>
  );
}

export default App;
