import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ scrolled }) => (scrolled ? "#f4a64c" : "linear-gradient(to right, #ebf8ff, #ffffff, #fef9c3)"  )};
  transition: background 0.3s ease-in-out;
  box-shadow: ${({ scrolled }) => (scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black; 
  font-family: "Bricolage Grotesque";

  a {
    text-decoration: none;
    color: black; 
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 44px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;

  &:hover {
    color: #2563eb;
  }
`;

const CTAButton = styled.div`
  .api-demo-btn {
    padding: 0.5rem 1rem;
    background-color: #d9d9d9;
    color: black;
    border-radius: 23px;
    text-decoration: none;
    font-weight: lighter;

    &:hover {
      background-color: white !important;
    }
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;



function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Nav scrolled={scrolled}>
      <Logo>
        <Link to="/">Africredify</Link>
      </Logo>

      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavLinks open={menuOpen}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </NavLinks>

      <CTAButton open={menuOpen}>
        <NavLink to="/api-demo" className="api-demo-btn">API Demo</NavLink>
      </CTAButton>
    </Nav>
  );
}

export default Navbar;
