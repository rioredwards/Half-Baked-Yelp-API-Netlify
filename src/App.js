import { useEffect, useState } from 'react';
import './App.css';
import { RestaurantListItem } from './components/RestaurantListItem';
import { fetchBusinesses } from './services/yelp';
import Button from '@mui/material/Button';
import { theme } from './theme.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Paper, ThemeProvider } from '@mui/material';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [zip, setZip] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBusinesses();
      setBusinesses(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'primary.background' }} className="App">
        <h1>Alchemy Restaurant Finder</h1>
        <div className="query-form">
          <div className="form-control">
            <label>Zip:</label>
            <input
              type="text"
              placeholder="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Query:</label>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            onClick={async () => {
              const resp = await fetchBusinesses(zip, search);
              setBusinesses(resp);
            }}
          >
            Search
          </Button>
        </div>
        {loading && <div className="loader"></div>}
        {!loading && businesses.map((b) => <RestaurantListItem key={b.id} {...b} />)}
      </Box>
    </ThemeProvider>
  );
}

export default App;
