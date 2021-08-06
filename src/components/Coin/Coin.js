// import React from "react";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid #282c34;
  width: 25vh;
`;

const Tr = styled.tr`
  border: 1px solid #282c34;
  width: 25vh;
`;

const Coin = props => {
  const handleClick = () => {
    props.handleRefresh(props.tickerId);
  };

  return (
    <>
      <Tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>$ {props.price}</Td>
        <Td>{props.rank}</Td>
        <Td>${props.showBalance ? props.balance : "****"}</Td>
        <Td>
          <button className="btn btn-info" onClick={handleClick}>
            Refresh
          </button>
        </Td>
      </Tr>
    </>
  );
};

// const Coin = ({ name, ticker, price }) => {
//   return (
//     <tr className="coin-row">
//       <td>{name}</td>
//       <td>{ticker}</td>
//       <td>${price}</td>
//     </tr>
//   );
// };

Coin.propType = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Coin;
