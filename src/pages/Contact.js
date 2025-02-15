import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdEmail } from "react-icons/md";





const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3);
  padding: 2rem 0;
`;

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 3.3rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  text-align: center;

  @media (max-width: 868px) {
    font-size: 2rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// 🔍 Search Bar Styling
const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 800px;
  background: white;
  border-radius: 50px;
  padding: 12px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled(FiSearch)`
  font-size: 1.2rem;
  color: gray;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
`;

const ContactContainer = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;


const ImageContainer = styled.button`
  flex: 1;
  border: none;
  background: none;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Icon = styled(MdEmail)`
  font-size: 50px; 
  color: #ff9f43; 
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and text */
  font-family: 'red hat display', sans-serif;

`;



const ContactCard = styled.div`
  flex: 1;
  background: #fff;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px; /* Ensures a good base height */
  height: 100%;

  @media (max-width: 768px) {
    width: 93%;
    padding: 1.5rem;
    min-height: auto; /* Allows it to shrink properly */
    align-self: stretch; /* Stretches it to full width */
  }
`;



const Button = styled.button`
  background: #f5a623;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #e69520;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 80%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: clamp(14px, 4vw, 16px); /* Scales text size */
  
  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;


const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  height: 120px;
`;



const ContactPage = () => {
    const handleImageClick = () => {
        console.log("Image button clicked! Schedule a call action here.");
        // You can navigate or open a modal here
      };
  return (
    <PageWrapper>
      <HeaderContainer>
        <Heading>
          Your Partner in Credit <br />
          Solutions and Support
        </Heading>
        <Subheading>
          We're dedicated to helping you achieve financial clarity and success.
          Whether you're seeking expert advice, technical support, or
          personalized guidance, our team is here to assist you every step of
          the way.
        </Subheading>
      </HeaderContainer>

      {/* 🔍 Search Bar Section */}
      <SearchBarContainer>
        <SearchBar>
          <SearchIcon />
          <SearchInput type="text" placeholder="Ask us anything..." />
        </SearchBar>
      </SearchBarContainer>

      <ContactContainer>
        {/* Image acting as both content and container */}
        <ImageContainer onClick={handleImageClick}>
          <BackgroundImage src={require("../assets/contact.png")} alt="Credit Support" />
        </ImageContainer>

        {/* Contact Form */}
       
        <ContactCard>
        <ContactHeader>
    <Icon />
    <h3>Send Us a Message</h3>
  </ContactHeader>
  <form>
    <Input type="text" placeholder="First Name" />
    <Input type="text" placeholder="Last Name" />
    <Input type="email" placeholder="Email Address" />
    <TextArea placeholder="Message"></TextArea>
    <Button type="submit">Get Started</Button>
  </form>
</ContactCard>


      </ContactContainer>
    </PageWrapper>
  );
};

export default ContactPage;
