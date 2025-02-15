import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { RadialProgress } from "react-radial-progress-indicator";

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ScoreChange = styled.div`
  background: #fff6e6;
  color: #ff9f43;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ScoreText = styled.p`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;

const ScoreDetails = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #555;
  text-align: left;
  max-width: 500px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
`;

// Function to determine color based on score
const getScoreColor = (score) => {
  if (score >= 800) return "#00a86b"; // Green (Excellent)
  if (score >= 700) return "#ffcc00"; // Yellow (Good)
  if (score >= 600) return "#ff9f43"; // Orange (Fair)
  return "#ff4b4b"; // Red (Poor)
};

const CreditScoreResults = () => {
  const [score, setScore] = useState(null);
  const [change, setChange] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://creditworthiness-ml.onrender.com") // Replace with your API
      .then((response) => {
        setScore(response.data.score);
        setChange(response.data.change);
      })
      .catch((error) => {
        console.error("Error fetching credit score:", error);
        setError("Unable to fetch credit score. Please try again.");
      });
  }, []);

  const scoreCategory =
    score >= 800 ? "Excellent" :
    score >= 700 ? "Good" :
    score >= 600 ? "Fair" : "Poor";

  const scoreMessage = {
    Excellent: "You're in a great position to secure the best loan rates and terms.",
    Good: "You have a solid foundation, but there's room for improvement.",
    Fair: "Consider taking steps to enhance your credit health.",
    Poor: "Focus on rebuilding your credit with our expert advice.",
  };

  return (
    <ResultContainer>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <ScoreChange>+{change} Points since last update</ScoreChange>
          <div style={{ width: 200, height: 200 }}>
            {score && score >= 300 ? (
              <RadialProgress
                ringBgColor="#ddd"
                ringFgColor={getScoreColor(score || 0)}
                ringIntermediateColor="#ffffff"
                ringThickness={8}
                segmented
                segments={5}
                animationDuration={800}
                value={Math.max(score || 0, 300)} // Ensure it's at least 300 (or a safe minimum)
                minValue={300} // Set a minimum value
                maxValue={850} // Set a reasonable maximum
              />
            ) : (
              <p>Credit score unavailable</p>
            )}
          </div>
          <ScoreText>
            Your Score is <b>{score}</b> ({scoreCategory})
          </ScoreText>
          <ScoreDetails>
            <strong>What Does This Mean for You?</strong>
            <p>{scoreMessage[scoreCategory]}</p>
          </ScoreDetails>
        </>
      )}
    </ResultContainer>
  );

};

export default CreditScoreResults;
