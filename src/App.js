import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CoinList from "./components/CoinList/CoinList";
import AccountBalance from "./components/AccountBalance/AccountBalance";
import styled from "styled-components";
import axios from "axios";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";

const Div = styled.div`
  text-align: center;
  background: white;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(2));

const App = () => {
  const [balance, setBalance] = useState(1000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    if (coinData.length === 0) {
      // component did mount
      fetchData();
    } else {
      // component did update
      // autoPriceRefresh();
    }
  });

  const addMoney = () => {
    setBalance(balance + 1000);
  };

  const fetchData = async () => {
    const response = await axios.get("https://api.coinpaprika.com/v1/coins");
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = "https://api.coinpaprika.com/v1/tickers/";
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const newCoinData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        rank: coin.rank,
        unit: 0,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      };
    });
    setCoinData(newCoinData);
    // autoPriceRefresh();
  };

  const autoPriceRefresh = () => {
    setInterval(() => {
      coinData.forEach(coin => handleRefresh(coin.ticker));
    }, 1000);
  };

  const handleRefresh = async id => {
    // const coin = state.coinData.find(coin => coin.key === id);
    const response = await axios.get(
      `https://api.coinpaprika.com/v1/tickers/${id}`
    );
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map(function(coin) {
      // debugger;
      let newCoin = { ...coin };
      if (id === coin.key) {
        newCoin.price = newPrice;
      }
      return newCoin;
    });
    setCoinData(newCoinData);
  };

  const handleTransaction = (id, isBuy) => {
    let amount = 0;
    const newCoinData = coinData.map(function(coin) {
      let newCoin = { ...coin };
      if (id === coin.key) {
        if (isBuy === true) {
          newCoin.balance += newCoin.price;
          newCoin.unit += 1;
          amount -= newCoin.price;
        } else {
          newCoin.balance -= newCoin.price;
          newCoin.unit -= 1;
          amount = newCoin.price;
        }
      }
      return newCoin;
    });
    setBalance(balance + amount);
    setCoinData(newCoinData);
  };

  const handleBalanceState = () => {
    setShowBalance(!showBalance);
  };

  return (
    <Div>
      <Header name="Mat" />
      <AccountBalance
        amount={balance}
        showBalance={showBalance}
        handleBalanceState={handleBalanceState}
        addMoney={addMoney}
      />
      <CoinList
        coinData={coinData}
        handleRefresh={handleRefresh}
        handleTransaction={handleTransaction}
        amount={balance}
        showBalance={showBalance}
      />
    </Div>
  );
};

export default App;
