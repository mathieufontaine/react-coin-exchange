import React from "react";
import Coin from "../Coin/Coin";
import styled from "styled-components";

const Table = styled.table`
  display: inline-block;
  margin: 0 auto 30px;
  font-size: 1.5rem;
  border-color: #7fa0cf;
`;

const Th = styled.th`
  background-color: #282c34;
  color: white;
  padding: 10px;
`;

const CoinList = ({ coinData, handleRefresh, amount, showBalance }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>ticker</Th>
            <Th>Price</Th>
            <Th>Rank</Th>
            <Th>Balance</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {coinData.map(({ key, name, ticker, price, rank, balance }) => (
            <Coin
              key={key}
              tickerId={key}
              handleRefresh={handleRefresh}
              name={name}
              ticker={ticker}
              rank={rank}
              price={price}
              balance={balance}
              amount={amount}
              showBalance={showBalance}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CoinList;
