import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Fragment } from 'react';
import CoinsClass from './coinsclass'
import CryptoMarket from './coins';
import Charts from './charts';

function App() {
  // creating an array of coins using hooks
  const[coins, setCoins] = useState([])
  const[search, setSearch] = useState("")
  var searches = search.toLowerCase()


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      
    }).catch(error => {
      console.log(error)
    })
  })


  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filtercoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(searches)
  )

  return (
    <Fragment>
      <div className='coin-app'>
        <CryptoMarket />
        <Charts />
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
    </div>
{filtercoins.map(coin => {
        return (
          <div>
          <CoinsClass key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price}
          changeInPrice={coin.price_change_percentage_24h} volume={coin.total_volume} />
          </div>
        )
      })}

    </Fragment>
  );
}

export default App;
