import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Spinner from "../components/spinner";
import CoinChart from "../components/CoinChart";

const API_URL = import.meta.env.VITE_COIN_DETAILS_API_URL;

const CoinDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [coinData, setCoinData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched coin details:", data);
        setCoinData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinDetails();
  }, [id]);

  return (
    <div className='coin-details-container'>
      <Link to='/'>← Back to Home</Link>

      <h1 className='coin-details-title'>
        {coinData ? `${coinData.name} (${coinData.symbol.toUpperCase()})` : 'Coin Details'}
      </h1>

      {loading && <Spinner />}
      {error && <p className='error'>❌ {error}</p>}

      {!loading && !error && coinData && (
        <>
          <img
            src={coinData.image.large}
            alt={coinData.name}
            className='coin-details-image'
          />
          <p>{coinData.description.en.split('. ')[0] + '.'}</p>

          <div className='coin-details-info'>
            <h3>Rank: #{coinData.market_cap_rank}</h3>
            <h3>Current Price: ${coinData.market_data.current_price.usd.toLocaleString()}</h3>
            <h4>Market Cap: ${coinData.market_data.market_cap.usd.toLocaleString()}</h4>
            <h4>24h High: ${coinData.market_data.high_24h.usd.toLocaleString()}</h4>
            <h4>24h Low: ${coinData.market_data.low_24h.usd.toLocaleString()}</h4>
            <h4>
              24h Price Change: ${coinData.market_data.price_change_24h.toFixed(2)} (
              {coinData.market_data.price_change_percentage_24h.toFixed(2)}%)
            </h4>
            <h4>
              Circulating Supply: {coinData.market_data.circulating_supply.toLocaleString()}
            </h4>
            <h4>
              Total Supply: {coinData.market_data.total_supply?.toLocaleString() || 'N/A'}
            </h4>
            <h4>Max Supply: {coinData.market_data.max_supply?.toLocaleString() || 'N/A'}</h4>
            <h4>
              All-Time High: ${coinData.market_data.ath.usd.toLocaleString()} on{' '}
              {new Date(coinData.market_data.ath_date.usd).toLocaleDateString()}
            </h4>
            <h4>
              All-Time Low: ${coinData.market_data.atl.usd.toLocaleString()} on{' '}
              {new Date(coinData.market_data.atl_date.usd).toLocaleDateString()}
            </h4>
            <h4>Last Updated: {new Date(coinData.last_updated).toLocaleString()}</h4>
          </div>

          <div className='coin-details-links'>
            {coinData.links.homepage[0] && (
              <p>
                🌐{' '}
                <a
                  href={coinData.links.homepage[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Website
                </a>
              </p>
            )}
            {coinData.links.blockchain_site[0] && (
              <p>
                🧩{' '}
                <a
                  href={coinData.links.blockchain_site[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blockchain Explorer
                </a>
              </p>
            )}
            {coinData.categories.length > 0 && (
              <p>Categories: {coinData.categories.join(', ')}</p>
            )}
          </div>
          <CoinChart coinId={coinData.id} />
        </>
      )}


      {!loading && !error && !coinData && <p>No data found.</p>}
    </div>
  );
}

export default CoinDetailsPage;