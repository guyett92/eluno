import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  };

  return (
    <div className={`header${sticky ? " sticky" : ""}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src="./images/eluno blue.png" alt="logo" width="50px" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink
                  className={sticky ? "" : "text-light nav-hover"}
                  href="/"
                  component="a"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={sticky ? "" : "text-light nav-hover"}
                  href="#feature"
                >
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={sticky ? "" : "text-light nav-hover"}
                  href="#service"
                >
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={sticky ? "" : "text-light nav-hover"}
                  href="#about"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={sticky ? "" : "text-light nav-hover"}
                  href="/purchase"
                >
                  Purchase
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
