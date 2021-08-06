// import React from "react";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Td = styled.td`
  border: 1px solid #282c34;
  width: 25vh;
`;

const TdActions = styled(Td)`
  width: 35vh;
`;

const Tr = styled.tr`
  border: 1px solid #282c34;
  width: 25vh;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  width: 100%;
  border-radius: 0;
  margin: 0;
`;

const ButtonAction = styled.button`
  width: 50%;
  border-radius: 0;
  margin: 0;
`;

const Coin = props => {
  const handleClick = () => {
    props.handleRefresh(props.tickerId);
  };

  const handleAction = isBuy => {
    props.handleTransaction(props.tickerId, isBuy);
  };

  return (
    <>
      <Tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>$ {props.price}</Td>
        <Td>{props.rank}</Td>
        <Td>{props.unit}</Td>
        <Td>${props.showBalance ? props.balance : "****"}</Td>
        <TdActions>
          <Button className="btn btn-info" onClick={handleClick}>
            Refresh
          </Button>
          <ButtonAction
            className="btn btn-success"
            onClick={() => handleAction(true)}
          >
            Buy
          </ButtonAction>
          <ButtonAction
            className="btn btn-danger"
            onClick={() => handleAction(false)}
          >
            Sell
          </ButtonAction>
        </TdActions>
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
