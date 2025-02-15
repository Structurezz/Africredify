import styled from "styled-components";

const APIDemoContainer = styled.div`
  background-color: #ebf8ff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
`;

const Description = styled.p`
  color: #4a5568;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

function APIDemo() {
  return (
    <APIDemoContainer>
      <Title>Demo our API for Businesses</Title>
      <Description>
        See how our credit scoring API can help your business make smarter decisions.
      </Description>
      <Button>Try Now</Button>
    </APIDemoContainer>
  );
}

export default APIDemo;
