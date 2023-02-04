import { useEffect, useState } from 'react';
import './App.css';
import { RestaurantListItem } from './components/RestaurantListItem';
import { fetchBusinesses } from './services/yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO -- add state for zip / search and add event listeners to the inputs

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBusinesses();
      setBusinesses(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // TODO -- add event for button click to handle calling fetchBusinesses with zip / search

  return (
    <div className="App">
      <h1>Alchemy Restaurant Finder</h1>
      <div className="query-form">
        <div className="form-control">
          <label>Zip:</label>
          <input type="text" placeholder="zip" />
        </div>
        <div className="form-control">
          <label>Query:</label>
          <input type="text" placeholder="Search..." />
        </div>
        <button>Search</button>
      </div>
      {loading && <div className="loader"></div>}
      {!loading && businesses.map((b) => <RestaurantListItem key={b.id} {...b} />)}
    </div>
  );
}

export default App;
