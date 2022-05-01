import React from 'react'
import './stylecoin.css';

class CryptoMarket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: [], 
            isLoaded: false
        };
    }
    componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=5&page=1&sparkline=false')
        .then(response => response.json())
        .then(json => {
            this.setState({ 
                coins: json, 
                isLoaded: true
            });
        });
    }

    render(){
        const { isLoaded, coins } = this.state;
        if (!isLoaded){
            return <div><p>Not loaded...</p></div>
        }
        else {
            return (
                <div className='text-center'>
                    <ul>
                       {coins.map(coin => (
                       <div key={coin.id} className='main-container'>
                            <div className='row'>
                                <div className='coin'>
                                    <img src={coin.image} alt='crypto' />
                                    <h1>{coin.name}</h1>
                                    <p className='coin-symbol'>{coin.symbol}</p>
                                </div>
                        <div className='coin-data'>
                            <p className='coin-price'>${coin.current_price}</p>
                            <p className='coin-volume'>${coin.total_volume.toLocaleString()}</p>

                            {coin.price_change_percentage_24h < 0 ? (
                                <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            ) : (
                            <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                            )}

                            <p className='coin-marketcap'>
                            Mkt Cap: ${coin.market_cap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
                       ))}
                   </ul>
                </div>
            )
        }
    }
}

export default CryptoMarket;