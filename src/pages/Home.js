
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const scrollLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;




const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
 
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;




const Header = styled.header`
  text-align: center;
  max-width: 1036px;
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const EmpowerText = styled.div`
  font-size: 9px;
  font-weight: 60;
  color: #000;
  padding: 8px 16px;
  border: 0.5px solid #FCB258;
  border-radius: 20px;
  display: inline-block;
  background: inherit;
`;

const Title = styled.h2`
  font-size: clamp(1.7rem, 4vw, 2.5rem); /* Scales dynamically */
  font-weight: bold;
  text-align: center;
  color: #222;
  line-height: 1.4;
  margin-bottom: 1rem;
  line-height: 0.2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem; /* Adds padding for better spacing */
  }
`;

const Highlight = styled.span`
  color: #f5a623;
  font-weight: bold;
`;


const Subtitle = styled.p`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.4;
  text-align: center;
  color: #4a5568;
  max-width: 800px;
  margin-top: 10px;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  width: 80%;
  max-width: 1010px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 8px;
  background: #E9E9E9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 40px;
  min-width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  outline: none;
`;


const Button = styled.button`
  background-color: #facc15;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #eab308;
  }

  @media (max-width: 768px) {
    width: 35%;
  }
`;
const InsightsContainer = styled.section`
  max-width: 64rem;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
`;

const InsightsTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;



const APIDemoWrapper = styled.div`
  max-width: 48rem;
  margin: 3rem auto;
  padding: 0 1rem;
`;
const ImageButton = styled.img`
  width: 100%;
  max-width: 80%;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 798px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px; // Optional: Prevents image from touching edges
`;


const APIDemoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover; /* Ensures it fits nicely */
`;

const CreditSection = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 4rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align to the left */
  text-align: left; /* Ensure text alignment */
`;

const CreditTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CreditText = styled.p`
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem; /* Space before the button */

  @media (max-width: 768px) {
    font-size: 1rem;
    font-family: 'Red Hat Display';
  }
`;

const CreditButton = styled.button`
  background-color: #ffb566;
  color: #000;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ffa045;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.3rem;
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
    max-width: 700px;
    max-height: 40px;
    animation: ${scrollLeft} 15s linear infinite;
  }
`;

const FlashImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const FlashImage = styled.img`
  width: 150px;  /* Default size for web */
  height: auto;
  animation: ${blink} 1.5s infinite ease-in-out; /* Blinking animation */

  @media (max-width: 768px) {
    width: 100px; /* Smaller size for mobile */
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;




function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nin, setNin] = useState("");
  const [error, setError] = useState("");

  const handleCheckCredit = () => {
    if (!email || !nin) {
      setError("Please enter both Email and NIN.");
      return;
    }
    setError(""); // Clear error message
    navigate("/transition");
  };

  return (
    <Container>
       
      <Header>
        <EmpowerText>Empower Your Financial Goals</EmpowerText>
        <Title>
          <p>Your Credit Score, <Highlight>Your Power:</Highlight></p>
          Build, Protect, and Succeed!
        </Title>
        <Subtitle>
          Track your credit score, learn how to improve it, and unlock opportunities for a brighter financial future. Start your journey to better credit!
        </Subtitle>
        <FormWrapper>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your NIN"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button onClick={handleCheckCredit}>Check Credit</Button>
        </FormWrapper>
      </Header>

      <FlashImageContainer>
        <FlashImage src={require("../assets/flash.png")} alt="flash" />
      </FlashImageContainer>

      <AnimatedImageContainer>
          <AnimatedImage src={require("../assets/powered.png")} alt="Financial Growth" />
        </AnimatedImageContainer>
    

      {/* New Section: Credit Rating Information */}
      
      <InsightsContainer>
        <InsightsTitle>Why it is important to know about your credit rating</InsightsTitle>
        <ImageWrapper>
        
        <ImageButton src={require("../assets/credit_rating.png")} alt="Scoring" />
        </ImageWrapper>
      </InsightsContainer>

    

      <APIDemoWrapper>
      <APIDemoImage src={require("../assets/Demo.png")} alt="API Demo Preview" />
      </APIDemoWrapper>
      <CreditSection>
  <CreditTitle>Take the Next Step: Enhance Your Credit Journey</CreditTitle>
  <CreditText>
   Discover strategies for timely payments,optimal credit utilization, and more.
  </CreditText>
  <CreditButton>Get Expert Tips</CreditButton>
</CreditSection>

    </Container>
  );
}

export default Home;