import React from "react";
import Coin from "../Coin/Coin";
import styled from "styled-components";

const Table = styled.table`
  display: inline-block;
  margin: 30px auto;
  font-size: 1.5rem;
`;

const CoinList = ({ coinData, handleRefresh, amount, showBalance }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ticker</th>
            <th>Price</th>
            <th>Rank</th>
            <th>Balance</th>
            <th>Actions</th>
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
