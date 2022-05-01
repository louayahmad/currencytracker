import React from 'react';
import './stylecoin.css';

const CoinsClass = ({ name, image, symbol, price, volume, changeInPrice, marketcap}) => {
  return (
    
    <div className='main-container'>
      <div className='row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {changeInPrice < 0 ? (
            <p className='coin-percent red'>{changeInPrice.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{changeInPrice.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoinsClass