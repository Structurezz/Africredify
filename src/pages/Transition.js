import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
`;

const GaugeContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GaugeArc = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid ${(props) => props.color};
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const CreditScoreLoader = () => {
  const [score, setScore] = useState(300);
  const [increasing, setIncreasing] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        if (prev >= 850) setIncreasing(false);
        if (prev <= 300) setIncreasing(true);
        return increasing ? prev + 10 : prev - 10;
      });
    }, 1000);

    const resultTimeout = setTimeout(() => {
      navigate("/result");
    }, 10000);

    const notFoundTimeout = setTimeout(() => {
      setNotFound(true);
      clearInterval(interval);
    }, 120000);

    return () => {
      clearInterval(interval);
      clearTimeout(notFoundTimeout);
      clearTimeout(resultTimeout);
    };
  }, [increasing, navigate]);

  const getColor = (score) => {
    if (score < 500) return "#FF4D4D"; // Red
    if (score < 700) return "#FFA500"; // Orange
    return "#4CAF50"; // Green
  };

  if (notFound) {
    return (
      <LoaderContainer>
        <motion.h2 animate={{ opacity: [0.5, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ color: "red" }}>
          Record Not Found
        </motion.h2>
      </LoaderContainer>
    );
  }

  return (
    <LoaderContainer>
      <motion.h2 animate={{ opacity: [0.5, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
        Calculating Credit Score...
      </motion.h2>
      <GaugeContainer>
        <GaugeArc animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 2 }} color={getColor(score)} />
        <motion.h1 animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
          {score}
        </motion.h1>
      </GaugeContainer>
    </LoaderContainer>
  );
};

export default CreditScoreLoader;
