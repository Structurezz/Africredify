import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f4a64c;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 17px 0;

  @media (max-width: 768px) {
    width: 100%;
    margin: 15px 0;
  }
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin: 5px 0;
  font-size: 14px;
  color: #000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Icon = styled.a`
  color: black;
  font-size: 20px;
  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>AfriCredify</Logo>
        </FooterSection>

        <FooterSection>
          <h4>Learn More</h4>
          <FooterLinks>
            <FooterLink>AfriCredit</FooterLink>
            <FooterLink>Pricing</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>API Demo</h4>
          <FooterLinks>
            <FooterLink>API Demo</FooterLink>
            <FooterLink>For Businesses</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>Contact Us</h4>
          <p>africredit@gmail.com</p>
          <p>23412345678</p>
        </FooterSection>

        <FooterSection>
          <h4>Social</h4>
          <SocialIcons>
            <Icon href="#"><FaFacebook /></Icon>
            <Icon href="#"><FaInstagram /></Icon>
            <Icon href="#"><FaTwitter /></Icon>
            <Icon href="#"><FaYoutube /></Icon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>© 2025 Funtech | All Rights Reserved</Copyright>
    </FooterContainer>
  );
};

export default Footer;
