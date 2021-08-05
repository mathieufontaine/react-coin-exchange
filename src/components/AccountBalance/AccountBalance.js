import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 2rem 0 2rem 5rem;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const Button = styled.button`
  border-radius: 4px;
  border: 0;
  background: white;
  padding: 2px;
  margin: 10px;
  cursor: pointer;
`;

const AccountBalance = props => {
  const button = props.showBalance ? "Hide Balance" : "Show Balance";
  const amount = props.showBalance ? props.amount : "****";

  return (
    <Section>
      <h3>Balance: $ {amount}</h3>
      <Button onClick={props.handleBalanceState}>{button}</Button>
    </Section>
  );
};

export default AccountBalance;

AccountBalance.propType = {
  amount: PropTypes.number.isRequired
};
