import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Headers from "./pages/header";
import NotFoundPage from "./pages/not-found";
import CoinDetailsPage from "./pages/coin-details";

const API_URL = import.meta.env.VITE_COINS_API_URL;

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

const App = () => {

  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState('market_cap_desc');


  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCoins(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [limit, sortBy]);

  return (
    <>
    <Headers />
    <Routes>
      <Route path="/" element={
        <HomePage
          coins={coins}
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
          sortBy={sortBy}
          setSortBy={setSortBy}
          loading={loading}
          error={error}
        />
      } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coin/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
    );
}
 
export default App;