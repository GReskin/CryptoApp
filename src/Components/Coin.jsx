import React from 'react'
import styles from './Coin.module.css'

export default function Coin(props) {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.coin}>
                <img src={props.img} alt="coin img" />
                <h2>{props.name}</h2>
            </div>
            <div className={styles.data}>
                <p className={styles.price}>
                    US${props.price}
                </p>
                {props.priceChange<0 ? (
                    <p className={styles.red}>{props.priceChange.toFixed(2)}%</p>
                ) : (
                    <p className={styles.green}>{props.priceChange.toFixed(2)}%</p>
                )}
                <p className={styles.marketCap}>
                    Market Cap: US${props.marketCap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}
