import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 2rem 0 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #7fa0cf;
`;

const Button = styled.button`
  border-radius: 4px;
  border: 0;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
`;

const ButtonBalance = styled(Button)`
  width: 100px;
`;

const H3 = styled.h3`
  color: white;
  font-weight: bold;
  display: block;
`;

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const AccountBalance = props => {
  const button = props.showBalance ? "Hide Balance" : "Show Balance";
  const amount = props.showBalance ? formatter.format(props.amount) : "****";
  const btnClass = "btn " + (props.showBalance ? "btn-info" : "btn-warning");

  return (
    <Section>
      <H3>Balance: {amount}</H3>
      <div>
        <Button className={btnClass} onClick={props.handleBalanceState}>
          {button}
        </Button>
        <ButtonBalance className="btn btn-success" onClick={props.addMoney}>
          <i className="fa fa-plus"></i>
        </ButtonBalance>
      </div>
    </Section>
  );
};

export default AccountBalance;

AccountBalance.propType = {
  amount: PropTypes.number.isRequired
};
