import logo from './logo.svg';
import './App.css';
import FilterComponent from './components/filter-component';
import DataComponent from './components/data-component';
import { useState } from 'react';

function App() {

  const [query , setQuery] = useState('');

  const getQuery = (query) => {
    setQuery(query)
  }

  return (
    <div className="App">
      <div className="container">
        <FilterComponent getQuery={getQuery}/>
        <DataComponent query={query}/>
      </div>
    </div>
  );
}

export default App;
