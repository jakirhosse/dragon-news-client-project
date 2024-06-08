import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import LiftSide from "../LiftSide/LiftSide";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ marginRight: '20px' }} to="/news/:id">News</Link>
            <Link to="/category/:id">Category</Link>
          </Nav>
          <Nav className="ms-auto">
            {user?.uid ? (
              <>
                <span>{user.displayName}</span>
                <Button variant="light" onClick={handleLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link className="mx-4" to="/login">
                  Login
                </Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            {user?.photoUrl ? (
              <Image
                style={{ height: "30px" }}
                roundedCircle
                src={user?.photoUrl}
              />
            ) : (
              <FaUser />
            )}
          </Nav>
          <div className="d-lg-none">
            <LiftSide />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
