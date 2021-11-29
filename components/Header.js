import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { AppContext } from "../contexts/ContextProvider";
import Wallet from "./Wallet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const context = useContext(AppContext);

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
    <div
      className={`header${sticky ? " sticky" : ""} ${
        context.store.walletConnected ? "not-visible" : ""
      }`}
    >
      <Navbar expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} className="justify-content-end" navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink className={sticky ? "" : "nav-hover"}>
                  <Wallet />
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
