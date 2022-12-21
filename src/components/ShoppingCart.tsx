import { createContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../hooks/ShoppingCartContext";

export function ShoppingCart(){
    const { closeCart } = useShoppingCart();
    return (
        <Offcanvas show={true} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}