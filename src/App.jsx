// import { useState } from 'react'
import './App.css'
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="search-bar-container">
        <h1>🔍 Emoji Search 🔦</h1>
        <SearchBar/>
        <div className='searchresults'>SearchResults</div>
      </div>
    </div>
  );
}

export default App;
