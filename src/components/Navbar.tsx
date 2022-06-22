import React from "react"
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import cartImage from "../imgs/shopping-cart-10925.svg"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
  const { getItemQuantity } = useShoppingCart()

  return (
    <>
      <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <div
            style={{
              position: "relative",
            }}
          >
            <img src={cartImage} alt="" style={{ width: "3rem", height: "3rem", cursor: "pointer", border: ".8px solid black", borderRadius: "50%", padding: "10px" }} />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%,25%)",
                backgroundColor: "lightgreen",
                borderRadius: "50%",
                color: "red",
                display: "flex",
                placeContent: "center",
                placeItems: "center",
                fontSize: ".85rem",
              }}
            >
              {getItemQuantity(1)}
            </div>
          </div>
        </Container>
      </NavbarBS>
    </>
  )
}

export default Navbar
