import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #4a5568;
`;

const ScoreCircle = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #fef9c3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
`;

const ScoreText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
`;

function CreditScoreCard({ title, score }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <ScoreCircle>
        <ScoreText>{score}</ScoreText>
      </ScoreCircle>
    </CardContainer>
  );
}

export default CreditScoreCard;
