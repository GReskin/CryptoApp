
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Coin from './Components/Coin'
import styles from './App.css'


function App() {

  const [coinList, setCoinList] = useState([]);
  const [searchBar, setSearchBar] = useState('');


  //Get API data and set Coinlist
  axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then( 
      res => {
       setCoinList(res.data)
       console.log(coinList);
      }
    )
    .catch(
        error=>console.log(error)
    )

  const handleSearchChange = e =>{
    setSearchBar(e.target.value)
  }

  //Filters coins as searched.
  const filteredCoins = coinList.filter(coin=>
    coin.name.toLowerCase().includes(searchBar.toLowerCase())
  )

  return (
    <div className='App'>
      <Header />
      <div className='coin-search'>
        <form action="">
          <input type="text" className="coin-search-input" placeholder="Search for a coin..." onChange={handleSearchChange}/>
        </form>
      </div>

      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          img={coin.image} 
          symbol={coin.symbol} //
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
