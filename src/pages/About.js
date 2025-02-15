import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const scrollLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Styled Components
const AboutSection = styled.section`
  width: 100vw;
  max-width: 100%;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
  color: #222;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Header = styled.h2`
  font-size: 3.7rem;
  font-family: 'Red Hat Display';
  font-weight: 700;
  max-height:15px6;
  color: #222;
  max-width: 900px;
  margin-bottom: 1rem;
  text-align: center; /* Ensures text is centered */

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subheader = styled.p`
  font-size: 0.9rem;
  color: #555;
  max-width: 800px;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: center; /* Centers text */

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns for web */
  gap: 2rem; /* Adds spacing between images */
  width: 100%;
  max-width: 800px; /* Matches text width */
  margin-bottom: 3rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for mobile */
    gap: 1rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 800px; /* Matches Header & Subheader width */
  height: auto;
  display: block;
  border-radius: 10px;
  object-fit: contain;
  margin: 0 auto; /* Ensures perfect centering */

  @media (max-width: 988px) {
    width: 100%; /* Prevents overflow on small screens */
  }
  &:hover {
    transform: translateY(-5px);
  }
`;



// **Animated Image**
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

// Global Styles to Prevent Overflow
const GlobalStyles = styled.div`
  body, html {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100%;
  }
`;

const AchieveSection = styled.section`
  width: 100%;
 
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const AchieveTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const GoalsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.0rem; /* Space between items */
  max-width: 1000px;
`;


const GoalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 20px;
  
  transition: transform 0.3s ease-in-out;
 

  &:hover {
    transform: translateY(-5px);
  }
`;

const GoalIcon = styled.img`
  width: 40px;
  height: 50px;
  margin-bottom: 15px;
`;

const GoalText = styled.p`
  font-size: 0.9rem;
  color: #444;
  max-width: 250px;
  text-align: left; /* Ensures left alignment */
  display: flex; /* Helps with left-to-right flow */
  flex-direction: column; 
  gap: 10px;
`;

const GoalTitle = styled.p`
  font-size: 1.2rem; 
  font-weight: bold; 
  color: #222; 
  text-align: center; 
  max-width: 250px;
  margin: 0 auto; /* Ensures centering within the max-width */
  display: block; /* Ensures proper text alignment */
`;



const About = () => {
  return (
    <>
      <GlobalStyles />
      <AboutSection>
        <Header>Empowering Financial Inclusion Across Africa</Header>
        <Subheader>
          At AfriCredify, we're committed to bridging the gap in financial inclusion by providing
          innovative credit scoring solutions that empower both individuals and businesses. Our mission is to unlock access to formal financial services for millions of unbanked Africans, fostering economic growth and reducing poverty.
        </Subheader>

        {/* Feature Cards */}
        <FeaturesGrid>
  <FeaturesContainer>
    <FeatureImage src={require("../assets/about1.png")} alt="Scoring 1" />
  </FeaturesContainer>
  <FeaturesContainer>
    <FeatureImage src={require("../assets/About 2.png")} alt="Scoring 2" />
  </FeaturesContainer>
  <FeaturesContainer>
    <FeatureImage src={require("../assets/about-3.png")} alt="Scoring 3" />
  </FeaturesContainer>
  <FeaturesContainer>
    <FeatureImage src={require("../assets/about4.png")} alt="Scoring 4" />
  </FeaturesContainer>
</FeaturesGrid>


        {/* Animated Image Below FeaturesGrid */}
        <AnimatedImageContainer>
          <AnimatedImage src={require("../assets/powered.png")} alt="Financial Growth" />
        </AnimatedImageContainer>
        <AchieveSection>
        <AchieveTitle>How We Achieve Goals</AchieveTitle>
        <GoalsContainer>
          <GoalItem>
            <GoalIcon src={require("../assets/Vector1.png")} alt="Goal 1" />
            <GoalTitle>Innovative Solutions</GoalTitle>
            <GoalText>We leverage cutting-edge technology like machine learning models for precise risk assessments and real-time credit scoring.</GoalText>
          </GoalItem>
          <GoalItem>
            <GoalIcon src={require("../assets/Vector2.png")} alt="Goal 2" />
            <GoalTitle>Compliance & Security</GoalTitle>
            <GoalText>Our systems ensure compliance with local regulations such as Nigeria's Data Protection Regulation (NDPR), while maintaining high security standards for user data protection.</GoalText>
          </GoalItem>
          <GoalItem>
            <GoalIcon src={require("../assets/Vector3.png")} alt="Goal 3" />
            <GoalTitle>Upgrades & Support</GoalTitle>
            <GoalText>We provide ongoing updates, customer support, and performance analytics to help users optimize their use of our solutions.</GoalText>
          </GoalItem>
        </GoalsContainer>
      </AchieveSection>
      </AboutSection>
    </>
  );
};

export default About;
