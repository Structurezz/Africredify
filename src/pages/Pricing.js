import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const scrollLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const SubHeader = styled.p`
  font-size: 20px;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem;
  font-family: 'Red Hat Display';

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    max-width: 95%;
  }
`;


const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#ff9f43" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: 2px solid #ff9f43;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  width: 150px;
  transition: background 0.3s;
  &:hover {
    background: #ff7f23;
    color: #fff;
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PricingCards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  color: #000;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 400px;
  width: 250px;
  border: 2px solid #ddd;
  transition: background 0.3s, color 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #ff9f43;
    color: #fff;
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const Price = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content */
`;

const Feature = styled.li`
  margin: 5px 0;
  &:before {
    content: "✔";
    color: #ff9f4;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #000;
  padding: 10px 20px;
  border: 1px solid #ff9f43;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: auto; /* Pushes button to the bottom */
  width: 100%;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ff7f23;
    color: #fff;
  }
`;

const AnimatedImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 3rem;
  height: 30px;
`;

const AnimatedImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 30px;
  display: block;
  border-radius: 10px;
  animation: ${scrollLeft} 15s linear infinite;
  object-fit: contain;

  @media (max-width: 728px) {
    max-width: 100%;
    animation: ${scrollLeft} 15s linear infinite;
  }
`;

const pricingData = {
    
  monthly: [
    {
      tier: "Basic Tier",
      price: "$100,000/month",
      features: ["Up to 1,000 API calls", "Basic credit scoring", "Email support"],
    },
    {
      tier: "Pro Tier",
      price: "$500,000/month",
      features: ["Up to 10,000 API calls", "Advanced credit scoring", "Priority support"],
    },
    {
      tier: "Enterprise Tier",
      price: "$1,0000,000/month",
      features: ["Unlimited API calls", "Custom integrations", "Dedicated support"],
    },
  ],
  annually: [
    {
      tier: "Basic Tier",
      price: "$1,100,800/year",
      features: ["Up to 12,000 API calls", "Basic credit scoring", "Email support"],
    },
    {
      tier: "Pro Tier",
      price: "$4,990,000/year",
      features: ["Up to 120,000 API calls", "Advanced credit scoring", "Priority support"],
    },
    {
      tier: "Enterprise Tier",
      price: "$8,000,000/year",
      features: ["Unlimited API calls", "Custom integrations", "Dedicated support"],
    },

],
callBased: [
  {
    tier: "Call-Based",
    price: "$5,000 per API",
    features: ["Pay per API integration", "Custom solutions", "Premium support"],
  },
],
};


 
const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <PricingContainer>
              <Header>Flexible Solutions for Your Business Growth</Header>
      <SubHeader>Choose a plan that fits your needs and scale your business seamlessly.</SubHeader>
      <ToggleContainer>
        <ToggleButton active={billingCycle === "monthly"} onClick={() => setBillingCycle("monthly")}>
          Billed Monthly
        </ToggleButton>
        <ToggleButton active={billingCycle === "annually"} onClick={() => setBillingCycle("annually")}>
          Billed Annually
        </ToggleButton>
      </ToggleContainer>
      <PricingCards>
        {pricingData[billingCycle].map((plan, index) => (
          <Card key={index}>
            <h3>{plan.tier}</h3>
            <Price>{plan.price}</Price>
            <FeatureList>
              {plan.features.map((feature, i) => (
                <Feature key={i}>{feature}</Feature>
              ))}
            </FeatureList>
            <Button>Get Started</Button>
          </Card>
        ))}
        {pricingData.callBased.map((plan, index) => (
          <Card key={index}>
            <h3>{plan.tier}</h3>
            <Price>{plan.price}</Price>
            <FeatureList>
              {plan.features.map((feature, i) => (
                <Feature key={i}>{feature}</Feature>
              ))}
            </FeatureList>
            <Button>Contact Us</Button>
          </Card>
        ))}
      </PricingCards>
      <AnimatedImageContainer>
          <AnimatedImage src={require("../assets/powered.png")} alt="Financial Growth" />
        </AnimatedImageContainer>
    </PricingContainer>
  );
};

export default Pricing;
