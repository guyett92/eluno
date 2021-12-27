import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Waitlist from "./Waitlist";
import Wallet from "./Wallet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [modalShow, setModalShow] = useState(false);
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
      <Navbar expand="md" dark>
        <NavbarToggler onClick={toggle} />
        <Collapse className="collapse-header" isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" href="#clothing">
                clothing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#vision">vision</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#team">team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#waitlist" onClick={() => setModalShow(true)}>
                waitlist
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText>
          <Wallet />
        </NavbarText>
      </Navbar>
      <Waitlist isOpen={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
